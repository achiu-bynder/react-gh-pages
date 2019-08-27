import React, { useState, useEffect } from "react";
import "./App.css";
import { Launcher } from "react-chat-window";
import { Input, Button } from "semantic-ui-react";
const Peer = window.Peer;
const p5 = window.p5;
function Component() {
  const [peerId, setPeerId] = useState(null);
  const [peer, setPeer] = useState(null);
  const [friendPeerId, setFriendPeerId] = useState(null);
  const [friendPeer, setFriendPeer] = useState(null);
  const [connected, setConnected] = useState(false);
  const [conn, setConn] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [myRec, setMyRec] = useState(null);
  console.log("list", messageList);

  useEffect(() => {
    var peer = new Peer({ key: "lwjd5qra8257b9" });
    setPeer(peer);

    peer.on("open", function(id) {
      console.log("My peer ID is: " + id);
      setPeerId(id);
    });

    peer.on("connection", function(conn) {
      setConn(conn);
      conn.on("open", function() {
        // Receive messages
        console.log("connected", conn);
        setConnected(true);
        conn.on("data", function(data) {
          console.log("Received", data);
        });

        // Send messages
        conn.send("Hello!");
      });
    });
  }, []);

  useEffect(() => {
    var myRec = new p5.SpeechRec("en-US", parseResult); // new P5.SpeechRec object
    myRec.continuous = true; // do continuous recognition
    myRec.interimResults = true; // allow partial recognition (faster, less accurate)
    myRec.start();

    function parseResult() {
      // recognition system will often append words into phrases.
      // so hack here is to only use the last word:
      var mostrecentword = myRec.resultString.split(" ").pop();
      if (mostrecentword.indexOf("left") !== -1) {
        /*
    dx = -1;
    dy = 0;
    */
      } else if (mostrecentword.indexOf("right") !== -1) {
        /*
    dx = 1;
    dy = 0;
    */
      } else if (mostrecentword.indexOf("up") !== -1) {
        /*
    dx = 0;
    dy = -1;
    */
      } else if (mostrecentword.indexOf("down") !== -1) {
        /*
    dx = 0;
    dy = 1;
    */
      } else if (mostrecentword.indexOf("clear") !== -1) {
        /*
    background(255);
    */
      }
      _sendMessage(myRec.resultString);
      if (conn) {
        conn.send(myRec.resultString);
      }
    }
  }, [messageList]);

  useEffect(() => {
    console.log("friendPeer", friendPeer);
    if (peer) {
      var conn = peer.connect(friendPeer);
      setConnected(true);
      setConn(conn);

      console.log("connection", conn);
    }
  }, [friendPeer, peer]);

  const _onMessageWasSent = message => {
    conn.send(message);
    setMessageList([...messageList, message]);
  };

  const _sendMessage = text => {
    if (text.length > 0) {
      setMessageList([
        ...messageList,
        {
          author: "them",
          type: "text",
          data: { text }
        }
      ]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {friendPeerId}
        {connected && (
          <Button
            onClick={() => {
              setConnected(false);
            }}
          >
            Disconnect
          </Button>
        )}
        {!connected && (
          <Input
            onChange={e => {
              setFriendPeerId(e.target.value);
            }}
            action={
              <Button
                onClick={() => {
                  setFriendPeer(friendPeerId);
                  _sendMessage("send");
                }}
              >
                send
              </Button>
            }
            placeholder="Connect to peer"
          />
        )}
        {peerId}

        <Launcher
          isOpen={true}
          agentProfile={{
            teamName: "react-chat-window",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
          }}
          onMessageWasSent={_onMessageWasSent.bind(this)}
          messageList={messageList}
          showEmoji
        />
      </header>
    </div>
  );
}

export default Component;
