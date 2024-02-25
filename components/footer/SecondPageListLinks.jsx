import Link from "next/link";

export const SecondPageListLinks = () => {
    const pageList2 = ["تماس با اسنپ‌فود", "پرسش‌های متداول", "ثبت شکایات", "اپلیکیشن موبایل"]

    return (
        <>
            {pageList2.map((item, i) => (
                <Link href={"/"}>
                    <div className={"m-2"}>
                        <p key={i} className={"font-iranSans text-xs inline-block text-carbon-main"}>{item}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}