import store from './index'

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || !entity[relation]) return []    
    return entity[relation].map(id => {
    	const relation = relStore.getIn(['entities', id.toString()])
    	if(relation) {
    		return relStore.getIn(['entities', id.toString()]).toJS()
    	} else {
    		return relation
    	}	
    })
}


export function fromArray(array) {
    return array.reduce((acc, item) => {
        return {...acc, [item.id]: item}
    }, {})
}

export function toArray(object) {
    return Object.keys(object).map(id => object[id])
}