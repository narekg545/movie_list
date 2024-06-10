import React from "react";
import Layout from "../components/layout/Layout";
import Button from "@/components/common/Button";
import { useRouter } from 'next/router';

const EmptyState: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/CreateMovie');
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full pt-[100px]">
        <h1 className="text-4xl font-semibold text-white mb-6">
          Your movie list is empty
        </h1>
        <Button label="Add a new movie" onClick={handleSubmit} />
      </div>
    </Layout>
  );
};

export default EmptyState;
