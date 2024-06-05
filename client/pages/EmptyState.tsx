import React from "react";
import Layout from "../components/layout/Layout";
import Button from "@/components/common/Button";

const EmptyState: React.FC = () => {
  const handleSubmit = () => {
    // Handle submit logic
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-semibold text-white mb-6">
          Your movie list is empty
        </h1>
        <Button label="Add a new movie" onClick={handleSubmit} />
      </div>
    </Layout>
  );
};

export default EmptyState;
