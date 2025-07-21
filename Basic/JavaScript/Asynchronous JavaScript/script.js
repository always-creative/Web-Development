async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(120)
        }, 3500);
    })
}
async function main() {
    console.log("load data")
    let data =  getData()


    console.log(data)
    console.log("process data")
}
main()