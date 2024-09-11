import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { AppStrings } from "../constants";

function RpmPortal() {

    const router = useRouter();
    
    return (
        <PageLayout>
            <div className="flex flex-col">
                <div className="mb-6 cursor-pointer" onClick={() => router.push('/#allDappsScroll')}>
                    <svg className="inline-block mr-2" width="24" height="24" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 19.5001L5 12.5001M5 12.5001L12 5.50012M5 12.5001H19" stroke="#E2E1E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-2xl">{AppStrings.allDapps}</span>
                </div>
                <div className="z-0 relative top-[16px] lg:top-[48px] w-full h-[75vh]">
                {<iframe src="https://portal.readyplayer.me/" title="Ready Player Me Games Portal" allow="fullscreen" width="100%" height="100%"> </iframe>}
                </div>
            </div>
        </PageLayout>
    );
}

export default RpmPortal;