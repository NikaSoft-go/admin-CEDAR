import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function AccordionDropdown(
    {includeDropdown = true, ...props}
) {

    return (
        <div className={"w-full max-w-md mx-auto bg-white py-2 px-4 rounded-lg"}>
            <Disclosure
                defaultOpen={props?.open}
            >
                {({ open }) => (
                    <div className="mb-2">
                        <DisclosureButton
                            className={"flex w-full justify-between items-center rounded-lg py-2 text-left font-medium"}
                            onClick={() => props.onChange?.()}
                        >
                            {props.cardHeaderTitle ?? (
                                <span className={"text-xl"}>
                                    {props.title}
                                </span>
                            )}

                            <div className={"flex space-x-2 items-center"}>
                                {props.cardHeaderRightContent}
                                {includeDropdown && (open ? (
                                    <BsChevronUp size={14} />
                                ) : (
                                    <BsChevronDown size={14} />
                                ))}
                            </div>
                        </DisclosureButton>
                        <DisclosurePanel className="mt-6">
                            {props.contentList?.map((content, index) => (
                                <div key={index}>{content}</div>
                            ))}
                        </DisclosurePanel>
                    </div>
                )}
            </Disclosure>
        </div>
    );
}