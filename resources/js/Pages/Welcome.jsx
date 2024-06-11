import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="text-2xl font-bold mb-4">Welcome to Activity Tracker</div>
                <div className="space-x-4">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="text-blue-500 underline">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-blue-500 underline">Login</Link>
                            <Link href={route('register')} className="text-blue-500 underline">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
