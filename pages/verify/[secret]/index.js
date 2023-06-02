import { message } from 'antd';
import { get } from '../../../components/utils/API';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import React from 'react';
export default function EmailVerification() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      let secret = router.query.secret;
      const verify = async () => {
        let result = await get(`/user/verify/${secret}`);
        if (result.status === 200) {
          message.success('Email verified!');
          router.push('/signin');
        } else {
          message.error('Email verification failed');
          router.push('/404');
        }
      };
      verify();
    }
  }, [router]);

  return (
    <div className="grid h-screen place-content-center">
      <div className="flex items-center gap-2">
        <span className="h-10 w-10 block rounded-full border-4 border-t-blue-700 animate-spin"></span>
        Loading...
      </div>
    </div>
  );
}
