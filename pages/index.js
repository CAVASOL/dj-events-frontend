import React from 'react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';
import EventItem from '@/components/EventItem';

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>})
      {events &&
        events.map((evt) => <EventItem key={evt.id} evt={evt.attributes} />)}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?_limit=3&_sort=date:ASC&populate=*`
  );
  const json = await res.json();
  const events = json.data;

  return {
    props: { events },
    revalidate: 1,
  };
}
