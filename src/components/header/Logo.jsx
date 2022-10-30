const Logo = ({ stroke, cssClass }) => (
    <svg className={`${cssClass}`} viewBox="0 0 180 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.0528 56.4656C51.1577 55.6054 49.9715 55.1138 48.7303 55.0887H40.1397V75.1135H43.4622V58.1717H48.6405C49.0298 58.1755 49.4036 58.325 49.6881 58.5908C49.9592 58.8719 50.1095 59.2479 50.1072 59.6384V75.1135H53.4297V59.6684C53.4382 59.0511 53.3158 58.439 53.0705 57.8724C52.8144 57.3486 52.4701 56.8728 52.0528 56.4656Z" fill={`${stroke}`} />
        <path d="M68.5756 56.6751C68.1261 56.2324 67.5983 55.8772 67.019 55.6275C66.4421 55.3785 65.8215 55.2462 65.1932 55.2383H61.1822C60.5539 55.2462 59.9333 55.3785 59.3563 55.6275C58.786 55.8773 58.268 56.2328 57.8298 56.6751C57.4069 57.1055 57.0715 57.6137 56.842 58.1717C56.5789 58.7547 56.4462 59.388 56.4529 60.0275V70.6236C56.4457 71.2536 56.5786 71.8772 56.842 72.4495C57.0598 73.0224 57.3965 73.5426 57.8299 73.976C58.2632 74.4093 58.7835 74.746 59.3563 74.9638C59.9286 75.2273 60.5523 75.3602 61.1822 75.353H66.5401V79.9326C66.5364 80.322 66.3869 80.6958 66.1211 80.9803C65.8399 81.2513 65.4639 81.4017 65.0734 81.3993H61.5414C61.3369 81.4087 61.1331 81.3703 60.946 81.2872C60.759 81.2041 60.5939 81.0785 60.4638 80.9204C60.2095 80.6076 60.0719 80.2161 60.0747 79.8129V79.3938C60.0896 79.2546 60.0896 79.1141 60.0747 78.9748H56.8719C56.879 79.703 56.9796 80.4273 57.1712 81.1299C57.3563 81.7644 57.65 82.3619 58.0393 82.896C58.4348 83.3974 58.9355 83.8061 59.506 84.0933C60.1532 84.426 60.8737 84.5907 61.6013 84.5722H65.3428C65.9728 84.5794 66.5964 84.4465 67.1687 84.1831C67.7407 83.933 68.2667 83.589 68.7252 83.1653C69.1579 82.7254 69.5033 82.2074 69.7429 81.6388C69.9824 81.0599 70.1045 80.4393 70.1021 79.8129V59.8779C70.1045 59.2418 69.9825 58.6113 69.7429 58.022C69.4427 57.5031 69.0465 57.046 68.5756 56.6751V56.6751ZM66.5401 72.2101H61.3618C60.9673 72.2024 60.591 72.0422 60.312 71.7632C60.033 71.4842 59.8728 71.108 59.8652 70.7134V59.6683C59.8623 59.4676 59.9006 59.2683 59.9779 59.083C60.0551 58.8976 60.1696 58.7301 60.3142 58.5908C60.4454 58.4439 60.6071 58.3276 60.7881 58.25C60.9692 58.1724 61.165 58.1355 61.3618 58.1418H65.0734C65.2697 58.1394 65.4643 58.1781 65.6448 58.2554C65.8252 58.3328 65.9874 58.447 66.1211 58.5908C66.3939 58.8828 66.544 59.2687 66.5401 59.6683V72.2101Z" fill={`${stroke}`} />
        <path d="M72.7062 58.1717H73.7239V75.1135H77.1362V55.1186H72.7062V58.1717Z" fill={`${stroke}`} />
        <path d="M92.1623 56.4656C91.2673 55.6054 90.081 55.1138 88.8398 55.0887H80.2492V75.1135H83.5717V58.1717H88.7201C88.914 58.1673 89.1067 58.2021 89.2868 58.2741C89.4668 58.3461 89.6304 58.4539 89.7677 58.5908C89.9115 58.7244 90.0258 58.8867 90.1031 59.0671C90.1804 59.2475 90.2191 59.4421 90.2167 59.6384V75.1135H93.5392V59.6684C93.5477 59.0511 93.4253 58.439 93.18 57.8724C92.914 57.3546 92.5709 56.8803 92.1623 56.4656Z" fill={`${stroke}`} />
        <path d="M125.028 56.6751C124.609 56.2086 124.1 55.8318 123.532 55.5676C122.93 55.2611 122.262 55.1069 121.586 55.1186H117.635C116.95 55.1045 116.271 55.2586 115.659 55.5676C115.088 55.8406 114.579 56.2277 114.163 56.705C113.739 57.1921 113.422 57.7633 113.235 58.3813C113.029 59.0192 112.928 59.6864 112.936 60.3568V70.5039C112.933 71.1207 113.055 71.7315 113.295 72.2999C113.543 72.8462 113.887 73.3431 114.312 73.7666C114.741 74.199 115.249 74.5445 115.809 74.7843C116.387 75.0269 117.008 75.1491 117.635 75.1434H121.586C122.193 75.146 122.794 75.0237 123.352 74.7843C123.896 74.5757 124.387 74.2485 124.789 73.8264C125.204 73.4059 125.547 72.9206 125.806 72.3897C126.065 71.8463 126.208 71.2551 126.226 70.6536V69.6658H123.023C123.02 70.223 122.939 70.7771 122.783 71.3121C122.708 71.5622 122.546 71.7775 122.327 71.92C122.108 72.0624 121.845 72.1227 121.586 72.0903H117.755C117.562 72.0964 117.371 72.0592 117.195 71.9815C117.019 71.9038 116.862 71.7875 116.737 71.6414C116.595 71.5123 116.482 71.3551 116.405 71.1799C116.328 71.0046 116.288 70.8152 116.288 70.6237V67.361H126.255V60.267C126.267 59.5964 126.166 58.9286 125.956 58.2915C125.748 57.7007 125.433 57.1529 125.028 56.6751V56.6751ZM122.903 64.3977H116.258V59.6684C116.258 59.4768 116.298 59.2874 116.375 59.1121C116.452 58.9369 116.565 58.7797 116.707 58.6507C116.992 58.3849 117.365 58.2353 117.755 58.2316H121.436C121.817 58.2339 122.182 58.3842 122.454 58.6507C122.596 58.7797 122.709 58.9369 122.786 59.1121C122.863 59.2874 122.903 59.4768 122.903 59.6684V64.3977Z" fill={`${stroke}`} />
        <path d="M108.955 56.6751C108.547 56.2094 108.047 55.8324 107.488 55.5676C106.886 55.2611 106.218 55.1069 105.542 55.1186H101.561C100.876 55.1045 100.198 55.2586 99.5856 55.5676C99.0233 55.8412 98.5239 56.2285 98.1189 56.705C97.6949 57.1921 97.3787 57.7633 97.191 58.3813C96.985 59.0192 96.884 59.6864 96.8917 60.3568V70.5039C96.8893 71.1207 97.0115 71.7315 97.2509 72.2999C97.4878 72.8524 97.834 73.3512 98.2686 73.7666C98.6865 74.1981 99.1848 74.5439 99.7353 74.7843C100.314 75.0237 100.935 75.1458 101.561 75.1434H105.542C106.149 75.1427 106.749 75.0206 107.308 74.7843C107.849 74.569 108.338 74.2427 108.745 73.8264C109.16 73.4059 109.504 72.9206 109.763 72.3897C110.007 71.8412 110.149 71.2529 110.182 70.6536V69.6658H106.949C106.956 70.2216 106.885 70.7757 106.74 71.3121C106.664 71.5622 106.502 71.7775 106.283 71.92C106.064 72.0624 105.802 72.1227 105.542 72.0903H101.771C101.571 72.0951 101.373 72.0544 101.192 71.9715C101.01 71.8885 100.85 71.7654 100.723 71.6114C100.457 71.3394 100.306 70.9745 100.304 70.5937V67.361H110.272V60.267C110.283 59.5964 110.182 58.9286 109.972 58.2915C109.747 57.6887 109.401 57.1385 108.955 56.6751V56.6751ZM106.859 64.3977H100.214V59.6684C100.214 59.4768 100.254 59.2874 100.331 59.1121C100.409 58.9369 100.522 58.7797 100.663 58.6507C100.935 58.3842 101.3 58.2339 101.681 58.2316H105.363C105.752 58.2353 106.126 58.3849 106.41 58.6507C106.552 58.7797 106.665 58.9369 106.742 59.1121C106.819 59.2874 106.859 59.4768 106.859 59.6684V64.3977Z" fill={`${stroke}`} />
        <path d="M139.875 57.6629C139.636 57.1542 139.3 56.6967 138.887 56.3159C138.453 55.95 137.969 55.6476 137.45 55.4179C136.907 55.2024 136.328 55.0907 135.744 55.0887H129.338V75.1435H132.661V58.3214H135.894C136.232 58.321 136.559 58.4373 136.822 58.6507C137.079 58.8613 137.25 59.1598 137.3 59.4888C137.3 59.4888 137.3 59.7582 137.3 60.0276V60.5663H140.294V59.9377C140.334 59.72 140.334 59.4969 140.294 59.2792C140.259 58.7186 140.116 58.17 139.875 57.6629V57.6629Z" fill={`${stroke}`} />
        <path d="M142.808 58.1717H143.796V75.1135H147.208V55.1186H142.808V58.1717Z" fill={`${stroke}`} />
        <path d="M162.234 56.4656C161.815 56.043 161.317 55.7073 160.768 55.4778C160.19 55.2318 159.57 55.0997 158.942 55.0887H150.321V75.1135H153.644V58.1717H158.822C159.016 58.1677 159.208 58.2028 159.388 58.2751C159.568 58.3473 159.731 58.4552 159.868 58.5922C160.005 58.7292 160.113 58.8926 160.185 59.0724C160.258 59.2522 160.293 59.4447 160.289 59.6384V75.1135H163.611V59.6684C163.62 59.0511 163.497 58.439 163.252 57.8724C163.006 57.3429 162.66 56.8653 162.234 56.4656V56.4656Z" fill={`${stroke}`} />
        <path d="M179.775 58.0221C179.535 57.4623 179.19 56.9541 178.757 56.5254C178.313 56.0898 177.797 55.7352 177.231 55.4778C176.643 55.2287 176.013 55.0966 175.375 55.0887H171.394C170.755 55.0934 170.124 55.2257 169.538 55.4778C168.972 55.7352 168.455 56.0898 168.011 56.5254C167.588 56.9558 167.253 57.4641 167.024 58.0221C166.774 58.6095 166.642 59.2399 166.634 59.8779V70.474C166.666 71.7226 167.156 72.9158 168.011 73.8264C168.458 74.2437 168.974 74.5781 169.538 74.8142C170.12 75.0801 170.754 75.213 171.394 75.2033H176.602V79.783C176.608 79.9771 176.574 80.1704 176.502 80.3507C176.43 80.531 176.321 80.6944 176.183 80.8306C176.046 80.9676 175.882 81.0753 175.702 81.1473C175.522 81.2193 175.329 81.2542 175.135 81.2497H171.603C171.4 81.2526 171.198 81.2113 171.012 81.1286C170.826 81.0459 170.66 80.9238 170.526 80.7708C170.271 80.458 170.134 80.0664 170.137 79.6633C170.122 79.524 170.122 79.3835 170.137 79.2442V78.8252H166.784C166.781 79.5521 166.872 80.2764 167.053 80.9803C167.239 81.6147 167.532 82.2122 167.922 82.7463C168.355 83.2786 168.903 83.7059 169.525 83.9961C170.147 84.2864 170.827 84.4322 171.513 84.4225H175.225C175.865 84.4292 176.498 84.2965 177.081 84.0334C177.639 83.7746 178.154 83.4314 178.607 83.0157C179.04 82.5758 179.385 82.0578 179.625 81.4892C179.865 80.9103 179.987 80.2897 179.984 79.6633V59.8779C180.035 59.2516 179.963 58.6214 179.775 58.0221V58.0221ZM176.782 72.0604H171.603C171.209 72.0528 170.832 71.8926 170.553 71.6136C170.274 71.3346 170.114 70.9583 170.107 70.5638V59.6684C170.104 59.4676 170.142 59.2683 170.219 59.083C170.297 58.8976 170.411 58.7301 170.556 58.5908C170.687 58.4439 170.849 58.3276 171.03 58.25C171.211 58.1724 171.406 58.1355 171.603 58.1418H175.315C175.512 58.1355 175.707 58.1724 175.888 58.25C176.069 58.3276 176.231 58.4439 176.362 58.5908C176.471 58.7457 176.549 58.9207 176.59 59.1057C176.631 59.2906 176.635 59.4818 176.602 59.6684L176.782 72.0604Z" fill={`${stroke}`} />
        <path d="M16.6726 71.4019C17.5282 72.2613 18.5455 72.9429 19.6658 73.4073C20.8226 73.8894 22.0645 74.1337 23.3176 74.1257H35.9192V69.3066H23.6768C22.4701 69.2846 21.3202 68.7902 20.474 67.9297C20.0647 67.5814 19.7333 67.1509 19.5012 66.6662C19.2691 66.1814 19.1417 65.6533 19.127 65.116V54.1009H28.1068C28.209 54.1049 28.311 54.0887 28.407 54.0533C28.5029 54.0178 28.591 53.9638 28.666 53.8943C28.7411 53.8248 28.8017 53.7412 28.8444 53.6482C28.8871 53.5553 28.9111 53.4548 28.915 53.3526V48.9525H19.127V20.7561H35.2008C35.394 20.7484 35.5768 20.6661 35.7107 20.5266C35.8446 20.3871 35.9193 20.2012 35.9192 20.0078V15.6975H14.6671C14.4766 15.6975 14.2939 15.7732 14.1591 15.9079C14.0244 16.0426 13.9487 16.2254 13.9487 16.4159V64.7269C13.9408 65.9801 14.1851 67.222 14.6671 68.3787C15.1395 69.5036 15.8199 70.5293 16.6726 71.4019V71.4019Z" fill={`${stroke}`} />
        <path d="M54.0284 19.1397C53.5349 18.6507 52.9568 18.2552 52.3222 17.9724C51.6695 17.6934 50.9667 17.5508 50.2569 17.5533H45.6173C44.8884 17.5533 44.1665 17.6956 43.4921 17.9724C42.8142 18.2388 42.1986 18.6421 41.6835 19.1571C41.1685 19.6721 40.7652 20.2877 40.4988 20.9656C40.2221 21.64 40.0798 22.3619 40.0798 23.0908V46.1089C40.0798 46.8379 40.2221 47.5598 40.4988 48.2341C40.7652 48.912 41.1685 49.5277 41.6835 50.0427C42.1986 50.5577 42.8142 50.961 43.4921 51.2274C44.1665 51.5041 44.8884 51.6465 45.6173 51.6464H50.2569C50.9667 51.649 51.6695 51.5063 52.3222 51.2274C52.9568 50.9446 53.5349 50.5491 54.0284 50.06C55.0468 49.0837 55.6566 47.7571 55.7345 46.3484V43.8041H51.8732V46.3484C51.8081 46.7606 51.6081 47.1396 51.3045 47.426C51.008 47.7143 50.6106 47.8754 50.197 47.8749H45.737C45.5193 47.8849 45.3021 47.8472 45.1004 47.7645C44.8988 47.6818 44.7176 47.556 44.5697 47.396C44.4111 47.2344 44.2869 47.0424 44.2046 46.8314C44.1223 46.6205 44.0836 46.3951 44.0908 46.1688V22.9112C44.0836 22.6849 44.1223 22.4595 44.2046 22.2486C44.2869 22.0377 44.4111 21.8456 44.5697 21.684C44.7176 21.524 44.8988 21.3982 45.1004 21.3155C45.3021 21.2328 45.5193 21.1951 45.737 21.2051H50.197C50.6106 21.2047 51.008 21.3658 51.3045 21.6541C51.6081 21.9404 51.8081 22.3194 51.8732 22.7317V25.2759H55.7345V22.8514C55.6566 21.4427 55.0468 20.1161 54.0284 19.1397V19.1397Z" fill={`${stroke}`} />
        <path d="M70.8504 23.899C69.9524 25.9943 69.0844 28.0896 68.2164 30.1848C67.3184 28.0896 66.4204 25.9943 65.5524 23.899C64.6843 21.8037 63.7863 19.7085 62.9183 17.6132H59.2366V51.5267H63.1877V27.7902C63.7564 29.1073 64.2952 30.4243 64.834 31.7114L66.5102 35.7223H69.9225C70.4613 34.3754 71.0001 33.0584 71.5688 31.7713C72.1375 30.4842 72.6464 29.1671 73.1552 27.8501V51.5866H77.1662V17.7629H73.5144C72.6164 19.7085 71.8382 21.8037 70.8504 23.899Z" fill={`${stroke}`} />
        <path d="M94.7366 19.1397C94.2431 18.6507 93.665 18.2552 93.0304 17.9724C92.3777 17.6934 91.6749 17.5508 90.9651 17.5533H86.3255C85.5966 17.5533 84.8747 17.6956 84.2003 17.9724C83.5224 18.2388 82.9068 18.6421 82.3918 19.1571C81.8768 19.6721 81.4735 20.2877 81.2071 20.9656C80.9303 21.64 80.788 22.3619 80.788 23.0908V46.1089C80.788 46.8379 80.9303 47.5598 81.2071 48.2341C81.4735 48.912 81.8768 49.5277 82.3918 50.0427C82.9068 50.5577 83.5224 50.961 84.2003 51.2274C84.8747 51.5041 85.5966 51.6465 86.3255 51.6464H90.9651C91.6749 51.649 92.3777 51.5063 93.0304 51.2274C93.665 50.9446 94.2431 50.5491 94.7366 50.06C95.755 49.0837 96.3648 47.7571 96.4427 46.3484V43.8041H92.5814V46.3484C92.5163 46.7606 92.3163 47.1396 92.0127 47.426C91.7162 47.7143 91.3188 47.8754 90.9052 47.8749H86.4453C86.2275 47.8849 86.0103 47.8472 85.8086 47.7645C85.607 47.6818 85.4259 47.556 85.2779 47.396C85.1193 47.2344 84.9951 47.0424 84.9128 46.8314C84.8305 46.6205 84.7918 46.3951 84.799 46.1688V22.9112C84.7918 22.6849 84.8305 22.4595 84.9128 22.2486C84.9951 22.0377 85.1193 21.8456 85.2779 21.684C85.4259 21.524 85.607 21.3982 85.8086 21.3155C86.0103 21.2328 86.2275 21.1951 86.4453 21.2051H90.9052C91.3188 21.2047 91.7162 21.3658 92.0127 21.6541C92.3163 21.9404 92.5163 22.3194 92.5814 22.7317V25.2759H96.4427V22.8514C96.3648 21.4427 95.755 20.1161 94.7366 19.1397V19.1397Z" fill={`${stroke}`} />
        <path d="M29.4238 7.07757C30.1504 7.71793 30.6187 8.60121 30.7409 9.56198V11.5674H35.9192V9.68171C35.9593 8.64742 35.7434 7.61924 35.2906 6.68846C34.8091 5.56269 34.1069 4.54489 33.2253 3.69521C32.356 2.86009 31.3416 2.1906 30.232 1.71966C29.1084 1.23245 27.8947 0.987669 26.6701 1.00128H9.39899C8.14587 0.99331 6.90395 1.23761 5.74722 1.71966C4.62691 2.18408 3.60961 2.86567 2.75397 3.72513C1.90816 4.59192 1.22843 5.60644 0.748502 6.71838C0.255349 7.8937 0.000973489 9.15542 0.000189003 10.43V54.7301C-0.00778315 55.9832 0.236521 57.2251 0.718563 58.3819C1.20143 59.4922 1.88084 60.5062 2.72406 61.3751C3.58138 62.225 4.59875 62.8965 5.71731 63.3507C6.86882 63.8528 8.11286 64.1077 9.36905 64.099H9.78811V59.2798C8.65751 59.2189 7.59025 58.7387 6.79486 57.9329C6.40533 57.542 6.10269 57.0734 5.90669 56.5576C5.71069 56.0418 5.62575 55.4905 5.65743 54.9396V10.0409C5.6405 9.48907 5.73517 8.93953 5.93576 8.42519C6.13636 7.91085 6.43875 7.44229 6.8248 7.04763C7.20622 6.63804 7.67032 6.31415 8.18634 6.09742C8.70237 5.88069 9.25854 5.77607 9.81805 5.79048H26.6401C27.1665 5.80865 27.6839 5.93188 28.162 6.15292C28.64 6.37395 29.069 6.68833 29.4238 7.07757Z" fill={`${stroke}`} />
        <path d="M35.56 63.3799V58.9499H23.2577V63.3799C23.2576 63.5733 23.3323 63.7593 23.4662 63.8988C23.6002 64.0383 23.7829 64.1205 23.9761 64.1283H34.7818C34.9831 64.1284 35.1766 64.0505 35.3217 63.911C35.4669 63.7715 35.5523 63.5811 35.56 63.3799Z" fill={`${stroke}`} />
    </svg>
)

export default Logo