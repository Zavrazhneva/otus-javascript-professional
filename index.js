const maxItemAssociation = (arr) => {
    let obj = {};

    arr.forEach((item, index) => {
        if (Object.keys(obj).length === 0) {
            obj[0] = item;
        } else {
            for (const itemKey in obj) {
                item.forEach(item2 => {
                    if (obj[itemKey].includes(item2)) {
                        obj[itemKey] = [...new Set([...obj[itemKey],...item])];
                        return;
                    } else {
                        obj[index] = item;
                    }
                });
            }
        }
    })
    console.log(obj)
}

maxItemAssociation([["a", "b"], ["a", "c"], ["d", "e"]])