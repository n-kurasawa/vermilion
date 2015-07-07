import { Actions } from 'flummox';
import 'isomorphic-fetch';
import { Socket } from '../vendor/phoenix';


export default class ScoreActions extends Actions {
  // ready: Promise;
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
    // chan.onError( e => console.log("something went wrong", e) )
    // chan.onClose( e => console.log("channel closed", e) );

    // chan.join("scores:get", {})
    //   .receive("ok", chan => {
    //     console.log("socket connect!!");
    //
    //     chan.on("new_score", payload => {
    //       this.getScore(payload.body);
    //     }.bind(this));
    //
    //   }.bind(this));
    //
    //  this.channel = chan;
  }

  createScore(score) {

    this.channel.push("new_score", {body: score});
    // return score;

    // const url = 'http://localhost:8080/api/scores';
    //
    // return fetch(url, {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify( {score: score} )
    // }).then((response) => {
    //
    //   if (response.status >= 400) {
    //     throw new Error("Bad response from server");
    //   }
    //   return response.json();
    //
    // }).then((score) => {
    //   return score;
    // });
  }

  getScore(score) {
    return score;
  }

  resetScore() {
    return;
  }

}
