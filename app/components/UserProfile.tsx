import { FolderGit2 } from "lucide-react";
import { Users } from "lucide-react";

interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    bio: string | null;
}

export default function UserProfile({ user }: { user: GitHubUser }) {
    if (!user) return null;

    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-8 p-4 bg-white/5 rounded-lg shadow-lg backdrop-blur-sm ring-1 ring-white/10 w-full max-w-md mx-auto overflow-hidden">
            <img
                src={user.avatar_url}
                alt={`Avatar of ${user.login}`}
                className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-white">{user.login}</h2>
            <p className="text-gray-300 text-center px-4">
                {user.bio || "No bio available"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center mt-4 text-white">
                <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-blue-400" />
                    <span>{user.public_repos} Repositories</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>{user.followers} Followers</span>
                </div>
            </div>

            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition duration-300"
            >
                View Profile
            </a>
        </div>
    );
}
