import { useRouter } from 'next/router';
import { post } from '../../../components/utils/API';
import { useEffect } from 'react';
import { UserContext } from '../../components/context';

export default function OAuth() {
  const router = useRouter();
  const { setIsLoggedIn, setUser } = useContext(UserContext);

  const auth = async () => {
    let code = router.query.code;
    const response = await post('/auth/google', {
      token: code,
    });

    if (response.status === 201 || response.status === 200) {
      setIsLoggedIn(true);
      setUser(response.data.data);
      if (!response.data.data.verified) {
        router.push('/verify');
      } else {
        router.push('/dashboard');
      }
    } else router.replace('/404');
  };
  useEffect(() => {
    if (router.isReady) {
      auth();
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
