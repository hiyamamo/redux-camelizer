# redux-camelizer
Camlize middleware for Redux

## Instllation
```
npm install redux-camelizer --save
```

## Usage example
```
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createCamelizer from 'redux-camelizer';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const camelizer = createCamelizer(['FETCH_SUCCESS'])

const store = createStore(reducer applyMiddleware(camelizer));
```
