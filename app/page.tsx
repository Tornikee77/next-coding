import Quiz from "@/features/quiz/components/quiz";
import ReactQueryProvider from "@/lib/react-query-provider";
import React from "react";

const Home = () => {
  return (
    <div>
      <ReactQueryProvider>
        <main className="p-8">
          <Quiz />
        </main>
      </ReactQueryProvider>
    </div>
  );
};

export default Home;
