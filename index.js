const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newObject = {...driver}
    newObject[key] = value
    return newObject
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => Object.assign(driver, {[key]: value})

const deleteFromDriverByKey = (driver, key) => {
    const newObject = {...driver}
    delete newObject[key]
    return newObject
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
} 