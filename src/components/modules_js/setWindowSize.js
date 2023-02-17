// アドレスバーを加味して画面全体の割合で高さを決定する
// ここだけやむを得ずjsにcssが混入
function setWindowSize(){
    let win_H = window.innerHeight;
    document.querySelector('#Header').style.height = win_H * 0.03;
    document.querySelector('.content').style.height = win_H * 0.97;
}

export default setWindowSize;