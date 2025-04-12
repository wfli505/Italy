document.addEventListener('DOMContentLoaded', function() {
    // 定义所有城市的位置数据
    const cityLocations = {
        rome: {
            center: [41.9028, 12.4964],
            zoom: 13
        },
        naples: {
            center: [40.8518, 14.2681],
            zoom: 13
        },
        capri: {
            center: [40.5532, 14.2222],
            zoom: 13
        },
        amalfi: {
            center: [40.6341, 14.6027],
            zoom: 13
        },
        florence: {
            center: [43.7696, 11.2558],
            zoom: 13
        },
        milan: {
            center: [45.4642, 9.1900],
            zoom: 13
        }
    };

    // 定义每天的地点坐标
    const dailyLocations = {
        1: [ // 罗马 Day 1
            {
                name: 'FCO机场',
                coords: [41.8002, 12.2388],
                time: '08:20'
            },
            {
                name: 'Roma Tuscolana站',
                coords: [41.8856, 12.5243],
                time: '10:35'
            },
            {
                name: 'Ponte Lungo民宿',
                coords: [41.8789, 12.5235],
                time: '10:45'
            },
            {
                name: '博尔盖塞美术馆',
                coords: [41.9147, 12.4924],
                time: '14:00'
            },
            {
                name: '斗兽场',
                coords: [41.8902, 12.4922],
                time: '17:00'
            },
            {
                name: '古罗马广场',
                coords: [41.8924, 12.4853],
                time: '17:30'
            },
            {
                name: '特雷维喷泉',
                coords: [41.9009, 12.4833],
                time: '19:00'
            },
            {
                name: '西班牙阶梯',
                coords: [41.9026, 12.4826],
                time: '19:40'
            }
        ],
        2: [ // 罗马 Day 2
            {
                name: 'Ponte Lungo民宿',
                coords: [41.8789, 12.5235],
                time: '上午'
            },
            {
                name: '真理之口',
                coords: [41.8881, 12.4816],
                time: '上午'
            },
            {
                name: '梵蒂冈博物馆',
                coords: [41.9064, 12.4534],
                time: '下午'
            },
            {
                name: '圣彼得大教堂',
                coords: [41.9022, 12.4539],
                time: '下午'
            },
            {
                name: 'Gianicolo山',
                coords: [41.8894, 12.4619],
                time: '傍晚'
            }
        ],
        3: [ // 那不勒斯 + 卡普里岛 Day 3
            {
                name: '罗马中央车站',
                coords: [41.9009, 12.5020],
                time: '10:40'
            },
            {
                name: '那不勒斯中央车站',
                coords: [40.8518, 14.2681],
                time: '11:53'
            },
            {
                name: "米凯莱老字号披萨店",
                coords: [40.8505, 14.2659],
                time: '12:30'
            },
            {
                name: 'Molo Beverello码头',
                coords: [40.8400, 14.2600],
                time: '14:40'
            },
            {
                name: '卡普里岛码头 (Marina Grande)',
                coords: [40.5556, 14.2425],
                time: '15:25'
            }
        ],
        4: [ // 卡普里岛 Day 4
            {
                name: 'Marina Grande码头',
                coords: [40.5556, 14.2425],
                time: '上午'
            },
            {
                name: 'Anacapri',
                coords: [40.5524, 14.2227],
                time: '上午'
            },
            {
                name: 'Monte Solaro',
                coords: [40.5479, 14.2322],
                time: '上午'
            },
            {
                name: '蓝洞',
                coords: [40.5587, 14.2037],
                time: '下午可选'
            },
            {
                name: '阿马尔菲码头',
                coords: [40.6341, 14.6027],
                time: '18:20'
            }
        ],
        5: [ // 阿马尔菲海岸 Day 5
            {
                name: 'Amalfi',
                coords: [40.6341, 14.6027],
                time: '上午'
            },
            {
                name: 'Bomerano (Agerola)',
                coords: [40.6214, 14.5291],
                time: '上午'
            },
            {
                name: 'Nocelle',
                coords: [40.6283, 14.5066],
                time: '下午'
            },
            {
                name: 'Positano',
                coords: [40.6283, 14.4849],
                time: '傍晚'
            }
        ],
        6: [ // 拉维洛 Day 6
            {
                name: 'Amalfi',
                coords: [40.6341, 14.6027],
                time: '上午'
            },
            {
                name: 'Ravello',
                coords: [40.6498, 14.6116],
                time: '上午'
            },
            {
                name: 'Villa Rufolo',
                coords: [40.6491, 14.6116],
                time: '中午'
            },
            {
                name: 'Villa Cimbrone',
                coords: [40.6484, 14.6106],
                time: '下午'
            },
            {
                name: 'Salerno',
                coords: [40.6824, 14.7680],
                time: '傍晚'
            }
        ],
        7: [ // 佛罗伦萨 Day 7
            {
                name: 'Firenze S.M.N.',
                coords: [43.7764, 11.2477],
                time: '12:00'
            },
            {
                name: '学院美术馆',
                coords: [43.7766, 11.2555],
                time: '下午'
            },
            {
                name: '圣母百花大教堂',
                coords: [43.7731, 11.2566],
                time: '下午'
            },
            {
                name: '乔托钟楼',
                coords: [43.7728, 11.2555],
                time: '下午'
            },
            {
                name: '维奇奥桥',
                coords: [43.7680, 11.2531],
                time: '下午'
            },
            {
                name: '米开朗基罗广场',
                coords: [43.7640, 11.2650],
                time: '傍晚'
            }
        ],
        8: [ // 米兰 Day 8
            {
                name: 'Milano Centrale',
                coords: [45.4863, 9.2055],
                time: '11:20'
            },
            {
                name: '最后的晚餐',
                coords: [45.4657, 9.1711],
                time: '下午'
            },
            {
                name: '米兰大教堂',
                coords: [45.4641, 9.1919],
                time: '下午'
            },
            {
                name: '埃马努埃莱二世拱廊',
                coords: [45.4659, 9.1897],
                time: '傍晚'
            },
            {
                name: '斯福尔扎城堡',
                coords: [45.4704, 9.1790],
                time: '傍晚'
            }
        ],
        9: [ // 返程 Day 9
            {
                name: 'Cadorna车站',
                coords: [45.4689, 9.1812],
                time: '06:00'
            },
            {
                name: '米兰马尔彭萨机场',
                coords: [45.6301, 8.7255],
                time: '06:50'
            }
        ]
    };

    // 初始化地图
    const map = L.map('map').setView(cityLocations.rome.center, cityLocations.rome.zoom);

    // 添加OpenStreetMap图层
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 自定义图标
    const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    let currentMarkers = [];
    let currentPolyline = null;

    // 更新地图标记的函数
    function updateMap(day) {
        // 清除现有标记和路线
        currentMarkers.forEach(marker => marker.remove());
        currentMarkers = [];
        if (currentPolyline) {
            if (Array.isArray(currentPolyline)) {
                currentPolyline.forEach(line => line.remove());
            } else {
                currentPolyline.remove();
            }
            currentPolyline = null;
        }

        // 如果没有该天的数据，返回
        if (!dailyLocations[day]) {
            return;
        }

        const locations = dailyLocations[day];
        const latlngs = [];

        // 确定当天的海上路线
        const seaRoutes = [];
        if (day === 3) {
            seaRoutes.push([3, 4]); // 那不勒斯到卡普里岛
        }
        if (day === 4) {
            seaRoutes.push([3, 4]); // 卡普里岛到阿马尔菲
        }

        // 添加新标记
        locations.forEach(location => {
            const marker = L.marker(location.coords, {icon: customIcon})
                .bindPopup(`<b>${location.name}</b><br>预计时间: ${location.time}`)
                .addTo(map);
            
            currentMarkers.push(marker);
            latlngs.push(location.coords);
        });

        // 绘制路线
        if (latlngs.length > 1) {
            currentPolyline = [];
            // 分段绘制路线
            for (let i = 0; i < latlngs.length - 1; i++) {
                const isSeaRoute = seaRoutes.some(([start, end]) => i === start);
                const routeStyle = isSeaRoute ? {
                    color: '#4A90E2',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '5, 10',
                    lineCap: 'round'
                } : {
                    color: '#8C8480',
                    weight: 3,
                    opacity: 0.8,
                    dashArray: '3, 7'
                };

                const segment = L.polyline([latlngs[i], latlngs[i + 1]], routeStyle).addTo(map);
                currentPolyline.push(segment);
            }
        }

        // 根据当天的地点调整地图视图
        if (currentMarkers.length > 0) {
            const group = new L.featureGroup(currentMarkers);
            const bounds = group.getBounds();
            
            // 为长距离行程增加更大的padding
            const isLongDistance = day === 3 || day === 7 || day === 8;
            const padding = isLongDistance ? 0.2 : 0.1;
            
            map.fitBounds(bounds.pad(padding));
            
            // 根据行程距离调整缩放级别
            const distance = bounds.getNorth() - bounds.getSouth();
            if (distance > 2) {
                map.setZoom(8); // 长距离行程使用较小的缩放级别
            }
        }
    }

    // 处理导航按钮点击
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 更新内容显示
            const day = this.getAttribute('data-day');
            document.querySelectorAll('.day-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`day${day}`)?.classList.add('active');

            // 更新地图
            updateMap(parseInt(day));
        });
    });

    // 初始化显示第一天的地图
    updateMap(1);
}); 