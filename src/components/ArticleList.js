import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import oneOpen from '../decorators/oneOpen'
import Select from 'react-select'
import DayPicker, { DateUtils } from "react-day-picker";

import 'react-select/dist/react-select.css'

class ArticleList extends Component {

    state = {
        selected: [],
        selectedDay: new Date(),
    }

    componentDidMount() {
        console.log('---', 2)
        console.log('---', findDOMNode(this.refs.chart))
    }

    render() {
        const { articles, isOpen, openItem } = this.props
        const articlesToShow = this.state.selected.length > 0 ? articles.filter((item) => this.state.selected.filter((selectedItem) => item.id == selectedItem.value).length > 0 ) : articles

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
                <DayPicker
                    
                />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }

    sunday = (day) => {
      return day.getDay() === 0;
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpen: PropTypes.func.isRequired,
    openItem: PropTypes.func.isRequired
}

export default oneOpen(ArticleList)
