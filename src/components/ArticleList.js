import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
<<<<<<< HEAD
import DayPicker, { DateUtils } from "react-day-picker";
import moment from 'moment';

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css'
=======
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import 'react-select/dist/react-select.css'
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb

class ArticleList extends Component {

    state = {
        selected: [],
        from: null,
<<<<<<< HEAD
        to: null,
=======
        to: null
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
<<<<<<< HEAD
        const { from, to } = this.state;
        console.log('from to', from, to)
        const { articles, isOpen, openItem } = this.props
        let articlesToShow = this.state.selected.length > 0 ? articles.filter((item) => this.state.selected.filter((selectedItem) => item.id == selectedItem.value).length > 0 ) : articles
        
        articlesToShow = articlesToShow.filter((article)=> {
            if(!from || !to) return true         
            return moment(article.createdDate) >= moment(from) && moment(article.createdDate) <= moment(to) 
        })

        const articleItems = articlesToShow.map((article) => <li key={article.id}>
=======
        const { articles, isOpen, openItem } = this.props
        const { from, to } = this.state

        const articleItems = this.getFilteredArticles().map((article) => <li key={article.id}>
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
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
<<<<<<< HEAD
=======
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.setDateRange.bind(this)}
                />
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
                <Select
                    options = {options}
                    onChange = {this.handleChange}
                    value= {this.state.selected}
                    multi = {true}
                />
<<<<<<< HEAD
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
=======
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
            </div>
        )
    }

<<<<<<< HEAD
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
=======
    getFilteredArticles() {
        const { articles } = this.props
        const { from, to, selected } = this.state
        return articles
            .filter((article) => !selected.length || selected.includes(article.id))
            .filter((article) => !(from || to) || DateUtils.isDayInRange(new Date(article.date), { from, to }))
    }

    setDateRange = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    handleChange = (selected) => {
        this.setState({
            selected: selected.map(el => el.value)
        })
    }
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
<<<<<<< HEAD
=======

>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

<<<<<<< HEAD
export default oneOpen(ArticleList)
=======
export default oneOpen(ArticleList)
>>>>>>> 4b04d0cc711add22646974a8f916e494129550bb
