import React from 'react';
import { parseCookies } from '@/helpers/index';
import Layout from '@/components/Layout';
import DashboardEvent from '@/components/DashboardEvent';
import { API_URL } from '@/config/index';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import styles from '@/styles/Dashboard.module.css';

export default function DashboardPage({ events, token }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const deleteEvent = (id) => {
    console.log(id);
  };

  useEffect(() => {
    if (!user) {
      router.push('/account/login');
    }
  });

  if (!user) {
    return null;
  }

  return (
    <Layout title="User Dashboard">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Events</h3>

        {events.map((evt) => (
          <DashboardEvent
            key={evt.id}
            evt={evt.attributes}
            handleDelete={deleteEvent}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (token) {
    const res = await fetch(`${API_URL}/events/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const events = await res.json();

    return {
      props: {
        events,
        token,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
