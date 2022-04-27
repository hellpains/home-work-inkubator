import React from 'react'
import {checkAC, homeWorkReducer, sortAC} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('up'))


    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState[0].age).toBe(66)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('down'))

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Кот')
    expect(newState[0].age).toBe(3)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))

    expect(newState.length).toBe(4)
})



