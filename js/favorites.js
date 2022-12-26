//classe que vai conter as logicas dos dados 
//como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }
    
    load() {
         this.entries = localStorage.getItem('@github-favorites:') || []
        console.log(entries)
        
    }
    delete(user) {
        const filteredEntries = this.entries.filter(entry => 
            entry.login !== user.login )
            this.entries = filteredEntries
            this.update()
    }
}
//classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
         this.tbody = this.root.querySelector('table tbody')

        this.update()
    }
    update (){
        this.removeAllTr()
        
    this.entries.forEach(user => {
 const row = this.createRow()
row.querySelector('.user img').src =`https://github.com/${user.login}.png`
row.querySelector('.user p').textContent = user.name
row.querySelector('.user span').textContent = user.login
row.querySelector('.repositories').textContent = user.public_repos
row.querySelector('.followers').textContent = user.followers

row.querySelector('.remove').onclick = () => {
const isOk = confirm('deseja deletar?')
if (isOk){
    this.delete(user)
}
}


this.tbody.append(row)


})
        }

        createRow () {
            const tr = document.createElement('tr')
            tr.innerHTML = 
            `
            <tr>
                <td class="user">
                <img src="https://github.com/rsoaresm10.png" alt="">
                <a href="https://github.com/rsoaresm10">
                    <p>Rafa Soares</p>
                    <span>rsoaresm10</span>
                </a>
            </td>
            <td class="repositories">
76
            </td>
            <td class="followers">
9589
            </td>
            <td><button class="remove">&times;</button></td>
            </tr>
        
        
        `
return tr
        }
        removeAllTr () {
    
            this.tbody.querySelectorAll('tr')
            .forEach((tr) =>{
                tr.remove()
            })
        }

}