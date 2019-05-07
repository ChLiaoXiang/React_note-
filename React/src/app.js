class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.DeleteAll = this.DeleteAll.bind(this);
        this.DiceRoll = this.DiceRoll.bind(this);
        this.AddOptions = this.AddOptions.bind(this);
        this.handRemove = this.handRemove.bind(this);
        this.state = {
            options : ['张三','李四','王五']
        }
    }
    DeleteAll(){
        this.setState( (pre)=>{
            // pre 上一个数据
            return {
                options: []
            }
        })
    }
    DiceRoll(){
        let index = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[index]);
    }
    AddOptions(option){
        if(option == ""){
            return "输入得内容不能为空！";
        }else if(this.state.options.includes(option)){
            return "输入得信息不能重复！ 请检查后输入。"
        }else{
            this.setState( ()=>{
                return {
                    options: this.state.options.concat([option])
                }
            })
        }
    }
    handRemove(index){
        this.setState( (pre) => {
            return {
                options: pre.options.filter( (val,i) => {
                    return i !== index;
                })
            }
        })
    }
    render(){
        return (
            <div>
                <Head />
                <Btns DeleteAll={ this.DeleteAll } DiceRoll={ this.DiceRoll } disaBled={ this.state.options.length > 0? false: true }/>
                <Options options={ this.state.options } handRemove={this.handRemove}/>
                <FormOption AddOptions={ this.AddOptions }/>
            </div>
        )
    }
}
//头部组件
class Head extends React.Component{
    render(){
        return (
            <div>
                <h1>This is My React Demo !!! </h1>
                <h2>Determination to learn !!! </h2>
                <hr/>
            </div>
        )
    }
}
//按钮组
class Btns extends React.Component{
    render(){
        console.log(this);
        return (
            <div>
                <button onClick={ this.props.DeleteAll }> DeleteAll </button>
                <button onClick={ this.props.DiceRoll } disabled ={this.props.disaBled}> DiceRoll </button>
            </div>
        )
    }
}
// 函数是的方式会加载的更快！
const Options = function(props){
    return (
        <div>
            {  props.options.length === 0 && <p>请添加一个选项</p>  }
            <ul>
                {   
                    props.options.map( (item,index) => {
                        return  <li key={index}> 
                                    <span>{item} </span>
                                    <button onClick={ ()=>{ props.handRemove(index)} }> remove </button>
                                </li>
                    })
                }
                </ul>
            </div>
    )
}
class FormOption extends React.Component{
    constructor(props){
        super(props);
        this.formAddOption = this.formAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    formAddOption(e){
        e.preventDefault()
        let option = e.target.elements.option.value;
        let error = this.props.AddOptions(option);
        this.setState( ()=>{
            return {
                error,
            }
        })
        e.target.elements.option.value = "";
    }
    render(){
        return(
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={ this.formAddOption }>
                    <input type="text" name="option" autoComplete="off"/>
                    <button> AddOption </button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />,document.getElementById('app'));