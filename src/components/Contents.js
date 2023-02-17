import React from 'react';
import icon from "../img/icon_325px.png"
import "../img/icon/style.css"

class Contents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents_index: 1
        };
        this.changeIndex = this.changeIndex.bind(this);
    }

    changeIndex (e){
        let index = Number(e.currentTarget.id);
        this.setState( () => ({
            contents_index: index
        }));
    }
 
    render(){
        const selects = (
            <div id='selects'>
                <button id="1" onClick={this.changeIndex}>news</button>
                <button id="2" onClick={this.changeIndex}>bio</button>
                <button id="3" onClick={this.changeIndex}>disco</button>
                <button id="4" onClick={this.changeIndex}>link</button>
            </div>
        );

        switch (this.state.contents_index){
            case 1:
                return (
                    <div className='content news'>
                        <div className='inside'>
                            <h1>NEWS</h1>
                            <div className='detail'>
                                <ul>
                                    <li>2023/02/16  OFFICIAL WEBSITE 制作</li>
                                    <li>2022/12/22  YOUTUBE CHANNEl 開設</li>
                                </ul>
                            </div>
                        </div>
                        {selects}
                    </div>
                );
            case 2:
                return (
                    <div className='content biography'>
                        <div className='inside'>
                            <h1>BIOGRAPHY</h1>
                            <div className='detail'>
                                <img src={icon}/>
                                <h2>Uroto</h2>
                                <h3>-Composer/Performer/Engineer-</h3>
                                <p>
                                    2019年、Guitarを始め、次第に音楽への関心が深まる。<br/>
                                    2022年、作曲に興味を持ち作曲を始める。<br/>
                                    最近はBass、VSTプラグインの自作にも挑戦している。
                                </p>
                            </div>
                        </div>
                        {selects}
                    </div>
                );
            case 3:
                return (
                    <div className='content discography'>
                        <div className='inside'>
                            <h1>DISCOGRAPHY</h1>
                            <div className='detail'>
                                <p>Not on sale yet...</p>
                            </div>
                        </div>
                        {selects}
                    </div>
                );
            case 4:
                return (
                    <div className='content link'>
                        <div className='inside'>
                            <h1>LINK</h1>
                            <div className='detail'>
                                <h2>Ofiicial</h2>
                                <ul>
                                    <li>
                                        <a href='https://www.youtube.com/channel/UC4uljzTOMT6e6RIiv4r1gtg'><i className='icon-play'></i>YouTube</a> 
                                    </li>
                                    <li>
                                        <a href='https://piapro.jp/Uroto'><span className='icon-music'></span>piapro</a>
                                    </li>
                                    <li>
                                        <a href='https://soundcloud.com/uroto'><span className='icon-onedrive'></span>SoundCloud</a>
                                    </li>
                                </ul>
                                <h2>SNS</h2>
                                <ul>
                                    <li>
                                        <a href='https://twitter.com/_Uroto_'><span className='icon-twitter'></span>Twitter</a>
                                    </li>
                                    <li>
                                        <a><span className='icon-instagram'></span>Instagram</a>
                                    </li>
                                </ul>
                                <h2>Contact</h2>
                                <ul>
                                    <li>
                                        <a href='mailto:uroto.request@gmail.com'><span className='icon-envelop'></span>Gmail</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {selects}
                    </div>
                );
            default:
                return (
                    <div>
                        <h1>Error!!x_x</h1>
                        {selects}
                    </div>
                );
        }
    }
}

export default Contents