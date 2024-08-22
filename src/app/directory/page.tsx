import { MembersList } from '@/components/lists';
// import { getMembersAction } from '../_actions/member';

export const dynamic = 'force-dynamic';

export default async function Directory() {
  if (!process.env.DATABASE_URL) {
    return (
      <MembersList
        response={{
          data: [],
          type: 'Error',
          message: 'Could not find database.',
        }}
      />
    );
  }
  // const response = await getMembersAction();
  // return <MembersList response={response} />;
}
