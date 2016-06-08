import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DayPicker, { DateUtils } from "react-day-picker";
import moment from 'moment';

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

    state = {
        selected: [],
        from: null,
        to: null,
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
        const { from, to } = this.state;
        console.log('from to', from, to)
        const { articles, isOpen, openItem } = this.props
        let articlesToShow = this.state.selected.length > 0 ? articles.filter((item) => this.state.selected.filter((selectedItem) => item.id == selectedItem.value).length > 0 ) : articles
        
        articlesToShow = articlesToShow.filter((article)=> {
            if(!from || !to) return true         
            return moment(article.createdDate) >= moment(from) && moment(article.createdDate) <= moment(to) 
        })

        const articleItems = articlesToShow.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isOpen(article.id)}
                openArticle = {openItem(article.id)}
            />
        </li>)

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                <Select
                    options = {options}
                    onChange = {this.handleChange}
                    value= {this.state.selected}
                    multi = {true}
                />
                <div className="RangeExample">
                    {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                    {from && !to && <p>Please select the <strong>last day</strong>.</p>}
                    {from && to &&
                      <p>
                        You chose from {moment(from).format('L')} to {moment(to).format('L')}.
                        {' '}<a href="#" onClick={this.handleResetClick}>Reset</a>
                      </p>
                    }
                <DayPicker
                    style={{ width: '600px' }}
                    numberOfMonths={2}
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />
              </div>
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    handleDayClick = (e, day) => {
       const range = DateUtils.addDayToRange(day, this.state);
       this.setState(range);
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
          from: null,
          to: null,
        });
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)
