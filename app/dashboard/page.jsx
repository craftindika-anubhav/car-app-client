'use client';
import Admin from '@/components/dashboard/Admin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');
      try {
        await axios.get(`${SERVER_DOMAIN}/api/admin/check-login`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLoading(false);
      } catch (err) {
        router.push('/login');
      }
    })();
  }, []);

  return <div>{!loading && <Admin />}</div>;
}
