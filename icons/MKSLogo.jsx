
const MKS = (width, height, className, fill) => {
    return (
        <svg
            className={className}
            width={width || "118"}
            height={height || "37"}
            viewBox="0 0 118 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        // style={{ filter: 'invert(51%) sepia(86%) saturate(2401%) hue-rotate(332deg) brightness(102%) contrast(101%)' }}
        >
            <path d="M2.816 13.04C4.208 11.84 5.72 10.736 7.352 9.728C9.008 8.72 10.148 8.216 10.772 8.216C11.42 8.216 11.924 8.36 12.284 8.648C12.644 8.936 12.824 9.32 12.824 9.8C12.824 10.616 12.2 11.204 10.952 11.564C7.376 12.596 4.7 13.952 2.924 15.632C4.7 17.312 7.376 18.668 10.952 19.7C12.2 20.06 12.824 20.648 12.824 21.464C12.824 21.944 12.644 22.328 12.284 22.616C11.924 22.904 11.42 23.048 10.772 23.048C10.148 23.048 9.008 22.544 7.352 21.536C5.72 20.528 4.208 19.424 2.816 18.224C1.424 17.024 0.692 16.16 0.62 15.632C0.692 15.104 1.424 14.24 2.816 13.04ZM41.9016 3.896L41.4696 3.932C41.7336 11.372 42.0096 16.712 42.2976 19.952C42.3696 20.744 42.7056 21.524 43.3056 22.292C43.9056 23.06 44.2056 23.72 44.2056 24.272C44.2056 24.8 44.0376 25.256 43.7016 25.64C43.3896 26.024 42.9576 26.216 42.4056 26.216C41.8776 26.216 41.4216 25.892 41.0376 25.244C40.6776 24.572 40.4616 23.852 40.3896 23.084C39.8136 15.092 39.0936 9.032 38.2296 4.904C36.0456 6.008 33.9096 7.916 31.8216 10.628C33.7176 13.628 34.6656 16.184 34.6656 18.296C34.6656 20.384 33.9576 22.196 32.5416 23.732C31.1256 25.244 29.8056 26 28.5816 26C27.3576 26 26.4096 25.604 25.7376 24.812C25.0896 24.02 24.7656 23.048 24.7656 21.896C24.7656 20.72 25.1496 19.244 25.9176 17.468C26.7096 15.668 27.7416 13.796 29.0136 11.852C27.9096 10.196 26.6376 8.732 25.1976 7.46C23.7576 6.188 22.3536 5.312 20.9856 4.832C20.9856 4.904 20.8896 5.576 20.6976 6.848C19.8576 12.104 19.2816 19.016 18.9696 27.584C18.8496 31.448 18.7536 33.692 18.6816 34.316C18.6336 34.94 18.4416 35.42 18.1056 35.756C17.7696 36.116 17.3736 36.296 16.9176 36.296C16.4856 36.296 16.0776 36.116 15.6936 35.756C15.3336 35.42 15.1536 34.856 15.1536 34.064C15.1536 33.296 15.4776 30.992 16.1256 27.152C17.4696 19.184 18.1896 11.588 18.2856 4.364C17.3016 4.148 16.8096 3.536 16.8096 2.528C16.8096 2.072 17.0256 1.7 17.4576 1.412C17.8896 1.1 18.4176 0.943999 19.0416 0.943999C20.8896 0.943999 22.8816 1.736 25.0176 3.32C27.1776 4.88 29.1216 6.848 30.8496 9.224C32.6736 6.8 34.5576 4.82 36.5016 3.284C38.4456 1.724 40.2456 0.943999 41.9016 0.943999C43.0296 0.943999 43.5936 1.4 43.5936 2.312C43.5936 2.744 43.4016 3.116 43.0176 3.428C42.6576 3.74 42.2856 3.896 41.9016 3.896ZM31.8216 19.556C31.8216 17.732 31.1856 15.668 29.9136 13.364C27.9696 16.484 26.9976 18.836 26.9976 20.42C26.9976 21.284 27.2136 22.04 27.6456 22.688C28.1016 23.336 28.6656 23.66 29.3376 23.66C30.0096 23.66 30.5856 23.24 31.0656 22.4C31.5696 21.536 31.8216 20.588 31.8216 19.556ZM52.3857 13.472C52.3857 13.472 52.4338 17.096 52.5298 24.344C52.5298 24.848 52.3858 25.292 52.0978 25.676C51.8338 26.036 51.4498 26.216 50.9458 26.216C50.4418 26.216 50.0338 26.036 49.7218 25.676C49.4098 25.292 49.2538 24.848 49.2538 24.344L49.4338 13.472L49.2538 2.852C49.2538 2.348 49.4098 1.904 49.7218 1.52C50.0338 1.136 50.4418 0.943999 50.9458 0.943999C51.4498 0.943999 51.8338 1.136 52.0978 1.52C52.3858 1.88 52.5298 2.384 52.5298 3.032C52.5298 3.68 52.5058 4.952 52.4578 6.848C52.4338 8.72 52.4218 9.896 52.4218 10.376C53.7658 8.12 55.6618 5.984 58.1098 3.968C60.5818 1.952 62.5498 0.943999 64.0138 0.943999C64.5658 0.943999 65.0218 1.112 65.3818 1.448C65.7658 1.784 65.9578 2.216 65.9578 2.744C65.9578 3.272 65.7658 3.704 65.3818 4.04C65.0218 4.376 64.6498 4.544 64.2658 4.544C63.8818 4.544 63.4858 4.448 63.0778 4.256C62.6938 4.04 62.2618 3.932 61.7818 3.932C61.3018 3.932 60.5698 4.292 59.5858 5.012C58.6018 5.732 57.5458 6.692 56.4178 7.892C55.3378 9.092 54.4618 10.22 53.7898 11.276C60.9658 20.588 69.6418 27.632 79.8178 32.408C81.3778 33.128 82.1578 33.944 82.1578 34.856C82.1578 35.336 81.9898 35.72 81.6538 36.008C81.3178 36.296 80.8498 36.44 80.2498 36.44C78.7618 36.44 76.2658 35.192 72.7618 32.696C69.2818 30.2 65.6698 27.212 61.9258 23.732C60.2218 22.172 58.4578 20.408 56.6338 18.44C54.8338 16.448 53.4178 14.792 52.3857 13.472ZM81.3528 5.588C79.9848 3.932 78.5808 3.104 77.1408 3.104C76.0128 3.104 75.0648 3.488 74.2968 4.256C73.5288 5.024 73.1448 5.936 73.1448 6.992C73.1448 8.048 73.4448 8.924 74.0448 9.62C74.6688 10.316 75.4368 10.892 76.3488 11.348C77.2608 11.804 78.2448 12.344 79.3008 12.968C80.3568 13.568 81.3408 14.204 82.2528 14.876C83.1648 15.524 83.9208 16.424 84.5208 17.576C85.1448 18.704 85.4568 20.096 85.4568 21.752C85.4568 23.408 85.1328 25.052 84.4848 26.684C83.8368 28.316 82.9848 29.72 81.9288 30.896C80.8728 32.072 79.6608 33.08 78.2928 33.92C75.5568 35.6 72.7128 36.44 69.7608 36.44C67.7688 36.44 66.0408 35.948 64.5768 34.964C63.0888 33.98 62.3448 32.864 62.3448 31.616C62.3448 30.368 62.9328 29.744 64.1088 29.744C64.5648 29.744 65.4888 30.38 66.8808 31.652C67.4088 32.132 68.1288 32.564 69.0408 32.948C69.9768 33.356 71.0088 33.56 72.1368 33.56C73.2888 33.56 74.4888 33.344 75.7368 32.912C76.9848 32.48 78.1488 31.856 79.2288 31.04C80.3328 30.248 81.2208 29.18 81.8928 27.836C82.5648 26.516 82.9008 25.04 82.9008 23.408C82.9008 21.752 82.4688 20.348 81.6048 19.196C80.7408 18.044 79.6968 17.144 78.4728 16.496C77.2488 15.848 76.0248 15.224 74.8008 14.624C73.5768 14 72.5328 13.208 71.6688 12.248C70.8048 11.288 70.3728 10.124 70.3728 8.756C70.3728 7.364 70.6728 6.128 71.2728 5.048C71.8968 3.968 72.6768 3.152 73.6128 2.6C75.3888 1.496 77.1528 0.943999 78.9048 0.943999C80.6568 0.943999 82.0848 1.352 83.1888 2.168C84.2928 2.984 84.8448 3.92 84.8448 4.976C84.8448 5.6 84.6888 6.08 84.3768 6.416C84.0648 6.728 83.7048 6.884 83.2968 6.884C82.8888 6.884 82.5408 6.776 82.2528 6.56C81.9888 6.32 81.6888 5.996 81.3528 5.588ZM88.3534 26.216C87.4414 26.216 86.9854 25.748 86.9854 24.812C86.9854 24.332 87.2494 23.672 87.7774 22.832C88.3054 21.968 89.2534 20.54 90.6214 18.548C91.9894 16.556 93.1294 14.78 94.0414 13.22C94.9774 11.636 95.7814 10.184 96.4534 8.864C97.1494 7.544 97.7014 6.464 98.1094 5.624C98.5414 4.76 98.9734 3.944 99.4054 3.176C100.245 1.688 101.037 0.943999 101.781 0.943999C102.693 0.943999 103.149 1.412 103.149 2.348C103.149 2.828 102.885 3.5 102.357 4.364C101.829 5.204 100.881 6.62 99.5134 8.612C98.1454 10.604 96.9934 12.392 96.0574 13.976C95.1454 15.536 94.3414 16.976 93.6454 18.296C92.9734 19.616 92.4214 20.708 91.9894 21.572C91.5814 22.412 91.1614 23.216 90.7294 23.984C89.8894 25.472 89.0974 26.216 88.3534 26.216ZM115.429 18.224C114.037 19.424 112.513 20.528 110.857 21.536C109.225 22.544 108.085 23.048 107.437 23.048C106.813 23.048 106.321 22.904 105.961 22.616C105.601 22.328 105.421 21.944 105.421 21.464C105.421 20.648 106.045 20.06 107.293 19.7C110.869 18.668 113.545 17.312 115.321 15.632C113.545 13.952 110.869 12.596 107.293 11.564C106.045 11.204 105.421 10.616 105.421 9.8C105.421 9.32 105.601 8.936 105.961 8.648C106.321 8.36 106.813 8.216 107.437 8.216C108.085 8.216 109.225 8.72 110.857 9.728C112.513 10.736 114.037 11.84 115.429 13.04C116.821 14.24 117.553 15.104 117.625 15.632C117.553 16.16 116.821 17.024 115.429 18.224Z" fill={fill || "#ff6347"} />
        </svg>
    )
}

export default MKS;