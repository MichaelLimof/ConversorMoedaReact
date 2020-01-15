import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import '../Styles/Style.css'

export class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        /*O BIND é feito porque toda função no JS tem esse metodo chamado BIND
        e pode ser passado algum objeto dentro desse BIND, sendo que esse passado
        será dentro da função o THIS.Poderia ser qqr objeto , porem como estou 
        usando o construtor o this na Função não existia sem o BIND 
        */
        this.converter = this.converter.bind(this)
    }


    converter() {
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;

        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=67b3d7472123632eab38 `


        //para acessar o dado convertido na url utiliza-se o Fetch

        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(json => {
                let cotacao = json[de_para]
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
                console.log(cotacao)
                console.log(moedaB_valor)
            })

    }

    render() {
        return (
            <div className="parent-div">
                <div className="Conversor">

                    <input type="text"
                        onChange={(event) => {
                            this.setState({
                                moedaA_valor: event.target.value
                            })
                        }}>

                    </input>

                    <input type="button" id="button" value="Converter" onClick={this.converter}></input>
                    <h2>{this.props.moedaA} para {this.props.moedaB} = {this.state.moedaB_valor}</h2>



                </div>
            </div>
        )
    }
}

export default Conversor
