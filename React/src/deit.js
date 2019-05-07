class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.addUserList = this.addUserList.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            userList: ['张三','李四','王五']
        }
    }
    addUserList(uName){
        //做一个验证
        if(uName === ''){
            return '输入的内容不能为空！'
        }else if(this.state.userList.includes(uName)){
            return '输入的内容重复，请重新输入！'
        }
        else{
            this.setState( (pre) => {
                return{
                    userList: pre.userList.concat([uName])
                }
            })
        }
    }
    deleteUser(i){
        this.setState( (pre)=>{
            return {
                userList: pre.userList.filter( (item,index)=>{
                    return i!==index;
                })
            }
        })
    }
    render(){
        return (
            <div>
                <List userList={ this.state.userList } deleteUser={ this.deleteUser } />
                <AddUser addUserList={ this.addUserList }/>
            </div>
        )
    }
}
const List = (props) => {
    return(
        <div>
            <ul>
                {   //其中注意的是 onClick 中返回的是个函数如果直接写就执行返回的是执行的结果 
                    props.userList.map( (item,index)=>{
                        return  <li key={index}>
                                    <span>{item}</span>
                                    <button onClick={ ()=>{ props.deleteUser(index) } }> x </button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}
class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.FormAddUser = this.FormAddUser.bind(this);     //注意
        this.state = {
            error: undefined
        }
    }
    FormAddUser(e){
        e.preventDefault();     //注意
        let uName = e.target.elements.userName.value;   //注意
        let error = this.props.addUserList(uName);  //注意
        this.setState( ()=>{
            return {
                error           //验证  注意
            }   
        })
        e.target.elements.userName.value = '';
    }
    render(){
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.FormAddUser}>
                    <input type="text" name="userName" autoComplete="off"/>
                    <button>addUser</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));