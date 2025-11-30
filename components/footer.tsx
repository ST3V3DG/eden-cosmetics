import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
	return (
		<footer className="text-white pt-16 relative bg-zinc-900">
			<div className="max-w-5xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mb-12">
					<div className="items-start flex-col justify-start flex gap-14">
						<Link className="inline-block max-w-full text-zinc-900" href="/">
							<div className="cursor-pointer">
								<svg
									className="inline w-36 h-16 fill-none"
									height="55"
									viewBox="0 0 135 55"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_2196_5059)" className="fill-none">
										<path
											className="fill-white"
											d="M30.159 40.025C29.7494 43.7257 25.1443 49.6762 16.4003 49.6762C6.97823 49.6762 0 43.2864 0 33.4489C0 24.1837 7.52914 17.7407 16.4003 17.7407C25.2713 17.7407 29.2125 22.5996 29.2125 26.8061C29.2125 28.976 28.0541 30.254 26.2319 31.026L11.1878 37.4824C12.9536 40.9968 16.0612 43.0334 20.1295 43.0334C23.7176 43.0334 26.571 41.303 27.8564 39.3328C28.6757 38.3742 30.2296 38.6938 30.159 40.0382V40.025ZM9.42203 29.0426C9.42203 31.026 9.61978 32.8765 10.1001 34.5405L18.844 30.3871C20.0589 29.8147 20.6098 28.7231 20.6098 27.3786C20.6098 25.0756 18.844 20.5495 15.1854 20.5495C11.5268 20.5495 9.42203 24.1971 9.42203 29.0426Z"
										/>
										<path
											className="fill-white"
											d="M54.6224 45.2382C52.149 48.2021 48.6428 49.6774 44.1173 49.6774C39.5917 49.6774 35.9767 48.229 33.6528 45.3321C31.329 42.4351 30.1602 38.7736 30.1602 34.3611C30.1602 29.6804 31.6551 25.7239 34.6313 22.4917C37.6076 19.2594 41.44 17.6365 46.1421 17.6365C48.8331 17.6365 51.4695 18.4949 54.038 20.2117V8.36899C54.038 7.4704 53.7391 6.7864 53.1275 6.34381C52.5159 5.8878 51.9044 5.49886 51.3064 5.15015C50.6949 4.80144 50.3959 4.33202 50.3959 3.72849C50.3959 2.91038 50.9123 2.30683 51.9588 1.93131C52.747 1.63625 54.106 1.23389 56.063 0.737651C58.02 0.241413 59.3926 0 60.1672 0C61.0778 0 61.703 0.14753 62.0291 0.456002C62.3552 0.751063 62.5183 1.38142 62.5183 2.32025V42.7972C62.5183 43.5215 62.6814 44.1249 63.0075 44.5944C63.3338 45.0638 63.6871 45.3857 64.0812 45.56C64.4752 45.7344 64.8287 45.949 65.1548 46.2038C65.481 46.4586 65.644 46.7403 65.644 47.0353C65.644 47.7595 65.4402 48.2827 65.019 48.5777C64.6112 48.8728 63.7686 49.0338 62.5048 49.0338H57.6802C57.6802 49.0338 54.6088 49.0338 54.6088 45.2382H54.6224ZM54.038 39.2564V27.9369C54.038 26.0056 53.3858 24.49 52.0811 23.4037C50.7764 22.3039 49.1456 21.7674 47.1886 21.7674C44.7967 21.7674 42.867 22.7599 41.3856 24.7314C39.9043 26.703 39.1705 29.6402 39.1705 33.5431C39.1705 37.4458 39.9043 40.383 41.3856 42.3546C42.867 44.3261 44.7967 45.3186 47.1886 45.3186C48.9689 45.3186 50.559 44.7017 51.9451 43.4813C53.3314 42.2607 54.038 40.8525 54.038 39.2699V39.2564Z"
										/>
										<path
											className="fill-white"
											d="M95.8035 40.025C95.3939 43.7257 90.7888 49.6762 82.0448 49.6762C72.6228 49.6762 65.6445 43.2864 65.6445 33.4489C65.6445 24.1837 73.1737 17.7407 82.0448 17.7407C90.9158 17.7407 94.857 22.5996 94.857 26.8061C94.857 28.976 93.6987 30.254 91.8764 31.026L76.8323 37.4824C78.5981 40.9968 81.7057 43.0334 85.774 43.0334C89.3621 43.0334 92.2155 41.303 93.5009 39.3328C94.3202 38.3742 95.8741 38.6938 95.8035 40.0382V40.025ZM75.0666 29.0426C75.0666 31.026 75.2643 32.8765 75.7446 34.5405L84.4885 30.3871C85.7034 29.8147 86.2544 28.7231 86.2544 27.3786C86.2544 25.0756 84.4885 20.5495 80.83 20.5495C77.1713 20.5495 75.0666 24.1971 75.0666 29.0426Z"
										/>
										<path
											className="fill-white"
											d="M134.316 46.7373C133.978 46.4785 133.612 46.3015 133.232 46.2199C132.852 46.1382 132.486 45.8387 132.148 45.335C131.809 44.8312 131.64 44.1096 131.64 43.143V30.604C131.64 26.2065 130.655 22.9663 128.67 20.8968C126.685 18.8274 123.6 17.7927 119.418 17.7927C115.236 17.7927 111.477 19.3584 108.421 22.6122C108.393 22.6394 108.337 22.6259 108.337 22.585C108.168 21.4685 107.971 20.3658 107.562 19.3038C107.506 19.1814 107.464 19.0452 107.407 18.9226C106.591 17.1527 104.831 15.9819 102.831 15.9683C102.042 15.9683 101.268 16.0636 100.48 16.1317C100.099 16.1725 99.7333 16.2406 99.353 16.2951C98.2266 16.4721 97.1141 16.6218 95.8047 16.4312C96.0722 17.0846 96.2552 17.602 96.4945 18.0786C97.2691 19.6715 98.3392 21.0329 99.8459 22.054C101.141 22.939 102.563 23.3883 104.084 23.4154C104.141 23.4154 104.155 23.4972 104.084 23.5108L102.775 23.7014C101.536 23.8784 100.634 24.9131 100.634 26.1112V43.1158C100.634 44.0688 100.465 44.8039 100.127 45.3077C99.7895 45.8114 99.4234 46.0974 99.0433 46.1926C98.6631 46.2744 98.297 46.4514 97.959 46.71C97.6211 46.9687 97.4521 47.3635 97.4521 47.8809C97.4521 49.0517 98.2829 49.6508 99.9585 49.6508H110.097C111.758 49.6508 112.603 49.0654 112.603 47.8809C112.603 47.3635 112.434 46.9687 112.096 46.71C111.758 46.4514 111.392 46.2744 111.012 46.1926C110.632 46.111 110.266 45.8114 109.928 45.3077C109.59 44.8039 109.421 44.0825 109.421 43.1158V29.6646C109.421 27.8403 110.069 26.2065 111.35 24.7633C112.631 23.3202 114.335 22.6122 116.447 22.6122C117.884 22.6122 119.066 22.8164 119.968 23.2384C120.869 23.6469 121.517 24.3004 121.925 25.1718C122.333 26.0431 122.587 26.9009 122.699 27.7585C122.812 28.6027 122.868 29.7326 122.868 31.1213V43.143C122.868 44.096 122.699 44.8312 122.361 45.335C122.023 45.8387 121.657 46.1246 121.277 46.2199C120.897 46.3015 120.531 46.4785 120.193 46.7373C119.855 46.9959 119.686 47.3908 119.686 47.9082C119.686 49.0789 120.517 49.6779 122.192 49.6779H132.331C133.993 49.6779 134.837 49.0926 134.837 47.9082C134.837 47.3908 134.668 46.9959 134.33 46.7373H134.316Z"
										/>
									</g>
									<defs className="fill-none">
										<clipPath fill="none" id="clip0_2196_5059">
											<rect className="w-32 h-14 fill-white" height="55" />
										</clipPath>
									</defs>
								</svg>
							</div>
						</Link>
						<div className="flex-col flex gap-4">
							<div className="font-medium">Sign up to receive health tips.</div>
							<div className="mt-0 mx-0 mb-3.5">
								<div className="items-center justify-start relative flex w-[90%]">
									<Input
										className="text-white cursor-text py-2 pl-6 pr-3 w-full h-12 mt-0 mx-0 mb-3 border-2 border-white/13 border-solid rounded-full bg-zinc-900"
										placeholder="Enter your email"
										type="email"
									/>
									<Button className="text-zinc-900 bg-white bottom-0 cursor-pointer py-2 px-6 absolute right-0 text-center top-0 inline-block w-24 h-12 rounded-full m-0">
										Submit
									</Button>
								</div>
								<div className="mx-0 mb-0 text-sm text-white/80">
									<p className="mb-3">
										By submitting your email address you agree to with our Privacy Policy and
										provide consent to receive updates from our company.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
						<div className="items-start flex-col justify-start flex gap-6">
							<div className="text-sm uppercase text-white/60">
								<div>Popular</div>
							</div>
							<ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
								<li className="list-item">GLP-1 Treatments</li>
								<li className="list-item">Ozempic®</li>
								<li className="list-item">Wegovy®</li>
								<li className="list-item">Sermorelin</li>
								<li className="list-item">NAD+</li>
							</ul>
						</div>
						<div className="items-start flex-col justify-start flex gap-6">
							<div className="text-sm uppercase text-white/60">
								<div>Company</div>
							</div>
							<ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
								<li className="list-item">About Us</li>
								<li className="list-item">Health Club</li>
								<li className="list-item">Pharmacy</li>
								<li className="list-item">Meal Plans</li>
								<li className="list-item">Community</li>
								<li className="list-item">Our Blog</li>
								<li className="list-item">Contact Us</li>
								<li className="list-item">Careers</li>
							</ul>
						</div>
						<div className="items-start flex-col justify-start flex gap-6">
							<div className="text-sm uppercase text-white/60">
								<div>Legal</div>
							</div>
							<ul className="items-start flex-col justify-start flex list-none mb-3 gap-6">
								<li className="list-item">Terms & Conditions</li>
								<li className="list-item">Privacy Policy</li>
								<li className="list-item">My Health My Data Policy</li>
								<li className="list-item">Important Safety Information</li>
								<li className="list-item">Your Privacy Choices</li>
							</ul>
						</div>
					</div>
				</div>
				<div arial-hidden="true" className="bg-white/30 h-px" />
				<div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6">
					<ul className="flex flex-wrap items-center justify-center lg:justify-start list-none gap-4">
						<li className="list-item">
							<Link
								className="items-center justify-center inline-block max-w-full"
								href="https://www.facebook.com"
							>
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 12.0591C22 6.50256 17.5229 1.99805 12 1.99805C6.47715 1.99805 2 6.50256 2 12.0591C2 17.0808 5.65684 21.2432 10.4375 21.998V14.9674H7.89844V12.0591H10.4375V9.84257C10.4375 7.32101 11.9305 5.92817 14.2146 5.92817C15.3088 5.92817 16.4531 6.12468 16.4531 6.12468V8.60066H15.1922C13.95 8.60066 13.5625 9.37627 13.5625 10.1719V12.0591H16.3359L15.8926 14.9674H13.5625V21.998C18.3432 21.2432 22 17.081 22 12.0591Z"
											fill="rgb(255, 255, 255)"
										/>
									</svg>
								</div>
							</Link>
						</li>
						<li className="list-item">
							<Link
								className="items-center justify-center inline-block max-w-full"
								href="https://www.instagram.com"
							>
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											clipRule="evenodd"
											d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
											fill="rgb(255, 255, 255)"
											fillRule="evenodd"
										/>
									</svg>
								</div>
							</Link>
						</li>
						<li className="list-item">
							<Link className="items-center justify-center inline-block max-w-full" href="https://x.com">
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.1761 4.00195H19.9362L13.9061 10.7794L21 20.002H15.4456L11.0951 14.4086L6.11723 20.002H3.35544L9.80517 12.7528L3 4.00195H8.69545L12.6279 9.11457L17.1761 4.00195ZM16.2073 18.3774H17.7368L7.86441 5.54123H6.2232L16.2073 18.3774Z"
											fill="rgb(255, 255, 255)"
										/>
									</svg>
								</div>
							</Link>
						</li>
						<li className="list-item">
							<Link
								className="items-center justify-center inline-block max-w-full"
								href="https://www.tiktok.com"
							>
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.2615 5.9218C15.5918 5.15694 15.2226 4.17486 15.2227 3.1582H12.1945V15.3102C12.1717 15.968 11.8942 16.5911 11.4206 17.0482C10.947 17.5054 10.3145 17.7606 9.65632 17.7602C8.26472 17.7602 7.10831 16.6234 7.10831 15.2122C7.10831 13.5266 8.73512 12.2624 10.4109 12.7818V9.68504C7.02991 9.23424 4.07031 11.8606 4.07031 15.2122C4.07031 18.4756 6.77511 20.7982 9.64648 20.7982C12.7237 20.7982 15.2227 18.2992 15.2227 15.2122V9.048C16.4506 9.92984 17.925 10.403 19.4367 10.4004V7.3722C19.4367 7.3722 17.5943 7.4604 16.2615 5.9218Z"
											fill="rgb(255, 255, 255)"
										/>
									</svg>
								</div>
							</Link>
						</li>
						<li className="list-item">
							<Link
								className="items-center justify-center inline-block max-w-full"
								href="https://www.linkedin.com"
							>
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											clipRule="evenodd"
											d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819C12.4203 15.9681 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292C15.6567 17.399 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591C18.327 15.6296 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
											fill="rgb(255, 255, 255)"
											fillRule="evenodd"
										/>
									</svg>
								</div>
							</Link>
						</li>
						<li className="list-item">
							<Link
								className="items-center justify-center inline-block max-w-full"
								href="https://www.youtube.com"
							>
								<div className="items-center cursor-pointer justify-center flex">
									<svg
										className="size-6 fill-none"
										height="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											clipRule="evenodd"
											d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
											fill="rgb(255, 255, 255)"
											fillRule="evenodd"
										/>
									</svg>
								</div>
							</Link>
						</li>
					</ul>
					<div className="flex items-center justify-center lg:justify-end gap-8">
						<Image
							alt="LegitScript Certified"
							className="cursor-pointer object-cover align-middle inline-block w-20 h-24 lg:w-24 lg:h-28 max-w-full"
							height={400}
							src="https://static.legitscript.com/seals/18293218.png"
							width={400}
						/>
						<div className="items-center flex-col justify-start text-center flex gap-2">
							<div className="text-white/80 text-sm font-medium">Compounded</div>
							<svg
								className="inline w-20 h-12"
								fill="none"
								height="47"
								viewBox="0 0 76 47"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_3699_313)" fill="none">
									<path
										d="M74.7319 1.18359H30.5859V9.86111H74.7319V1.18359Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<path
										d="M74.7319 9.86328H30.5859V18.5408H74.7319V9.86328Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<path
										d="M74.7319 18.543H30.5859V27.2205H74.7319V18.543Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<path
										d="M74.7303 27.2227H2.56641V35.9002H74.7303V27.2227Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<path
										d="M74.7303 35.8984H2.56641V44.576H74.7303V35.8984Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<path
										d="M30.5859 1.18359H2.56641V27.2206H30.5859V1.18359Z"
										fill="none"
										stroke="#eeeeee"
										strokeMiterlimit="10"
									/>
									<circle cx="8.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="8.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="8.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="12.5" cy="10.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="12.5" cy="18.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="16.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="16.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="16.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="20.5" cy="10.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="20.5" cy="18.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="24.5" cy="6.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="24.5" cy="14.5" fill="none" r="0.5" stroke="#eeeeee" />
									<circle cx="24.5" cy="22.5" fill="none" r="0.5" stroke="#eeeeee" />
								</g>
								<defs fill="none">
									<clipPath fill="none" id="clip0_3699_313">
										<rect
											className="w-20 h-12"
											fill="rgb(255, 255, 255)"
											height="46.7305"
											transform="translate(0.898438 0.0703125)"
										/>
									</clipPath>
								</defs>
							</svg>
							<div className="text-white/80 text-sm font-medium">in the U.S.A.</div>
						</div>
					</div>
				</div>
				<div arial-hidden="true" className="bg-white/30 h-px" />
				<div className="items-center justify-center p-6 text-center flex text-sm">
					<div>© 2025 EDEN SARL. All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
}
