import React, { useEffect } from 'react';
import Code from '../../components/CodeEditor/index';
import Monaco from '../../components/CodeEditorMonaco/index';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();
  return (
   router.query.editor == 'monaco' ? <Monaco/> : <Code/>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
//   return {
//     props: {}
//   }
// }


export async function getServerSideProps({ params, query }) {
    // Pass the query parameters as props to the component
    return { props: { query } };
  }
  
  export default IndexPage;
  
