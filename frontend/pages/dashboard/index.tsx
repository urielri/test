import Content from "components/pages/dashboard";
import { getUsers } from "api";
import { useUser } from "components/validation/context";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from 'next/head'
function Dashboard(props: { data: any }): JSX.Element {
  const { data } = props;
  const router = useRouter();
  const currentUser = useUser();
  useEffect(() => {
  !currentUser.logged && router.push("/");
  });
  return <><Head><title>Dashboard</title></Head>{currentUser.logged && <Content data={data} />}</>;
}
export default Dashboard;
export async function getStaticProps(): Promise<any> {
  const data = await getUsers();
  return {
    props: {
      data: data,
    },
  };
}
