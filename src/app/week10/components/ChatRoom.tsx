import { useState, useEffect } from "react";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>채팅에 오신걸 환영합니다!</h1>;
}

function createConnection() {
  return {
    connect() {
      console.log("✅ 연결 중...");
    },
    disconnect() {
      console.log("❌ 연결 해제됨");
    },
  };
}
