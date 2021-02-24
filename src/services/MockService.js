class MockServices {
    getAll(){
        return ListItems;
    }
    getById(id) {
    let  a = ListItems.forEach((item, index) => {
         if(index === id){
             console.log(item);
          return item;
         }
     });
     return a;
    }
}
export default new MockServices();
const ListItems = [
    {
        name: 'Le Nguyen Thi',
        job: 'vat vo',
    },
    {
        name: 'Nguyen Truong Uyen Nhi',
        job: 'PHP',
    },
    {
        name: 'Nguyen Thi Kim Thoa',
        job: 'PHP',
    },
    {
        name: 'Mai Xuan Binh Minh',
        job: 'vat vo',
    },
    {
        name: 'Le Nguyen Thi2',
        job: 'vat vo',
    },
]