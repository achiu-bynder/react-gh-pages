import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Launcher } from "react-chat-window";
import { Input, Button } from "semantic-ui-react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  toggleWidget
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
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
  let widgetEl = useRef();
  let launcherEl = useRef();
  let inputEl = useRef();
  useEffect(() => {
    var peer = new Peer({ key: "lwjd5qra8257b9" });

    peer.on("open", function(id) {
      console.log("My peer ID is: " + id);
      setPeerId(id);
    });

    peer.on("connection", function(conn) {
      setConn(conn);
    });
    setPeer(peer);
    toggleWidget();
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
      conn.send(myRec.resultString);
      _sendMessage(myRec.resultString);
    }
  }, [conn]);

  useEffect(() => {
    if (conn) {
      conn.on("open", function() {
        // Receive messages
        console.log("connected", conn);
        setConnected(true);
        //setConnected(true);
        conn.on("data", function(data) {
          console.log("Received", data);
          addResponseMessage(data);
        });
      });
    }
  }, [conn]);

  useEffect(() => {
    if (peer) {
      var conn = peer.connect(friendPeer);
      setConnected(true);
      setConn(conn);
    }
  }, [friendPeer]);

  const _onMessageWasSent = message => {
    conn.send(message);
  };

  const _sendMessage = text => {
    if (text.length > 0) {
      debugger;
      addUserMessage(text);
    }
  };
  const handleNewUserMessage = newMessage => {
    conn.send(newMessage);
  };

  return (
    <div ref={inputEl} className="App">
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
        <Widget handleNewUserMessage={handleNewUserMessage} />
      </header>
    </div>
  );
}

export default Component;
