import React from 'react';
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL, PER_PAGE } from '@/config/index';
import Pagination from '@/components/Pagination';

export default function EventsPage({ events, page, totalEvents }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt.attributes} />
      ))}

      <Pagination page={page} totalEvents={totalEvents} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * PER_PAGE;

  const res = await fetch(
    `${API_URL}/api/events?sort=date%3ASC&pagination[start]=${start}&pagination[limit]=${PER_PAGE}&populate=*`
  );

  const events = await res.json();

  return {
    props: {
      events: events.data,
      page: parseInt(page),
      total: events.meta.pagination.total,
    },
  };
}
