import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function EventPage({ evt }) {
  const router = useRouter();

  // if (evt !== undefined) {
  //   const { attributes } = evt;

  //   console.log(attributes);

  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {new Date(attributes.date).toLocaleDateString('en-US')} at{' '}
          {attributes.time}
        </span>

        <h1>{attributes.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.data.attributes.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers</h3>
        <p>{evt.performers}</p>

        <h3>Description</h3>
        <p>{evt.description}</p>

        <h3>Venue - {attributes.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const json = await res.json();
  const events = json.data;

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(
    `${API_URL}/api/events?filters[slug]slug=${slug}&populate=*`
  );
  const json = await res.json();
  const events = json.data;

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}
