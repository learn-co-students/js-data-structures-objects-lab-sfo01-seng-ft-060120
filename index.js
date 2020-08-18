// Write your solution in this file!

const driver = {name: '', address: ''}

const driverObject = {
    driver: {
    name: '',
    address: ''
    }
}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    driverObject[key] = value;
    return driverObject
}

function deleteFromDriverByKey(driverObject, key) {
    let cloneOfDriverObject = Object.assign({}, driverObject)
    delete cloneOfDriverObject[key]
    return cloneOfDriverObject
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key]
    return driverObject
}