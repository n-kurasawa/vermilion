import { Actions } from 'flummox';
import { Socket } from '../vendor/phoenix';


export default class ScoreActions extends Actions {
  channel: phoenix.Channel;

  constructor() {
    super();
    let socket = new Socket("ws://" + location.host +  "/ws");
    socket.connect();
    let chan = socket.chan("scores:join");
    chan.join("scores:join", {})
      .receive("ok", ({messages, scores}) => {
        console.log("catching up", messages)
        this.resetScore();
        scores.forEach((score)=>{
          if (score !== "") {
            this.getScore(score);
          }
        }.bind(this));
      })
      .receive("error", ({reason}) => console.log("failed join", reason) )
      .after(10000, () => console.log("Networking issue. Still waiting...") );
    chan.onError( e => console.log("something went wrong", e) )
    chan.onClose( e => console.log("channel closed", e) );

    chan.on("new_score", payload => {
      this.getScore(payload.body);
    }.bind(this));

    chan.on("reset_score", payload => {
      this.resetScore();
    }.bind(this));

    this.channel = chan;
  }

  createScore(score) {
    if (score > 10 || score < 0) {
      this.error("0~10点までの間にしてくだされ");
    } else {
      this.channel.push("new_score", {body: score});
    }
  }

  getScore(score) {
    return score;
  }

  resetAction() {
    this.channel.push("reset_score", {});
  }

  resetScore() {
    return 0;
  }

  error(msg) {
    return msg;
  }

}
