import Image from "next/image";
import { prefix } from '../../lib/prefix';

export function BackgroundRadialRight() {
    return (
        <>
            <Image src={`${prefix}/assets/background-floated-right.png`} width={850} height={650} alt="Circle Right" />
            <div className="right-0 absolute -z-50 top-0">
                <Image src="/assets/background-floated-right.png" width={850} height={650} alt="Circle Right" />
            </div>
        </>
    );
}
