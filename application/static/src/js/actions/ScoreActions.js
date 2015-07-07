import { Actions } from 'flummox';
import { Socket } from '../vendor/phoenix';


export default class ScoreActions extends Actions {
  channel: phoenix.Channel;

  constructor() {
    super();
    let socket = new Socket("ws://" + location.host +  "/ws");
    socket.connect();
    let chan = socket.chan("scores:get");
    chan.join("scores:get", {})
      .receive("ok", ({messages}) => console.log("catching up", messages) )
      .receive("error", ({reason}) => console.log("failed join", reason) )
      .after(10000, () => console.log("Networking issue. Still waiting...") );
    chan.onError( e => console.log("something went wrong", e) )
    chan.onClose( e => console.log("channel closed", e) );

    chan.on("new_score", payload => {
      this.getScore(payload.body);
    }.bind(this));

    this.channel = chan;
  }

  createScore(score) {
    this.channel.push("new_score", {body: score});
  }

  getScore(score) {
    return score;
  }

  resetScore() {
    return;
  }

}
