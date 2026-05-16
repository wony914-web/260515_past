import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./login/actions";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold tracking-tight">장윤정과 둥실이</h1>
      <p className="text-2xl">윤원</p>

      {user ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-gray-600">{user.email} 님 안녕하세요</p>
          <form action={logout}>
            <button
              type="submit"
              className="rounded border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              로그아웃
            </button>
          </form>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="rounded border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            회원가입
          </Link>
        </div>
      )}
    </main>
  );
}
