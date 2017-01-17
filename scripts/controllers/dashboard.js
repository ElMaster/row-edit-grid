'use strict';

function indexCtrl($scope, $http, $location, $timeout) {
    $scope.dataChart = [
        {"CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394},
        {"CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396},
        {"CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351},
        {"CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277},
        {"CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218},
        {"CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394},
        {"CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396},
        {"CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351},
        {"CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277},
        {"CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218},
        {"CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394},
        {"CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396},
        {"CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351},
        {"CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277},
        {"CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218},
        {"CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394},
        {"CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396},
        {"CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351},
        {"CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277},
        {"CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218}
    ];

    var northwind = {
        "results": [{
            "ID": 1,
            "Image": "https://images-na.ssl-images-amazon.com/images/I/311XrooH2iL._SL75_.jpg",
            "ProductInfo": {
                "ID": 1,
                "SKU": "BBB-1040",
                "ASIN": "B0057T66UW1",
                "MFNAFN": "MFN/AFN",
                "ProductName": "Alexander Hamilton Bobblehead",
                "Condition": "Condition",
                "FNSKU": "FNSKU"
            },
            "AvailableStock": {
                "AvailableFBA": "Available FBA",
                "InboundQty": "Inbound Qty",
                "ReservedFC": "Reserved FC",
                "AvailableMFN": "Available MFN",
                "TotalInventory": "Total Inventory"
            },
            "Purchasing": {
                "LastCost": "Last Cost",
                "LastAverageCost": "Last Average Cost",
                "AverageCost": "Average Cost",
                "InboundFBACost": "Inbound FBA Cost",
                "PrepCost": "Prep Cost"
            },
            "PurchaseHistory": {
                "CaseQty": {
                    "Date": "20.01.2017",
                    "Qty": "Qty",
                    "Av": "Av",
                    "Price": "Price"
                }
            },
            "Velocity": {
                "DaysOOS365": "Days OOS 365",
                "Velocity7Days": "Velocity 7 Days",
                "Velocity30Days": "Velocity 30 Days",
                "Velocity90Days": "Velocity 90 Days",
                "Velocity365Days": "Velocity 365 Days"
            },
            "Profitability": {
                "Price90": {
                    "Low": 20,
                    "High": 21,
                    "Ave": 22
                },
                "Profits90": {
                    "Low": 20,
                    "High": 21,
                    "Ave": 22
                },
                "PricesNow": 26,
                "ProfitsNow": 27,
                "TotalNewOffers": "Total New Offers",
                "FBA": "FBA",
                "MFN": "MFN",
                "Rank30Ave": 30,
                "Category": "Category"
            },
            "Order": {
                "RelativeSuccessNow": "RelativeSuccess Now",
                "RelativeSuccess90": "RelativeSuccess 90",
                "Suggested30": "Suggested 30",
                "Suggested90": "Suggested 90",
                "Editable": "Editable",
                "Total": "Total"
            }
        },
            {
                "ID": 2,
                "Image": "https://images-na.ssl-images-amazon.com/images/I/51eLDDU5ZaL._SL75_.jpg",
                "ProductInfo": {
                    "ID": 2,
                    "SKU": "BBB-1040",
                    "ASIN": "B0057T66UW6",
                    "MFNAFN": "MFN/AFN",
                    "ProductName": "Alexander Hamilton Bobblehead",
                    "Condition": "Condition",
                    "FNSKU": "FNSKU"
                },
                "AvailableStock": {
                    "AvailableFBA": "Available FBA",
                    "InboundQty": "Inbound Qty",
                    "ReservedFC": "Reserved FC",
                    "AvailableMFN": "Available MFN",
                    "TotalInventory": "Total Inventory"
                },
                "Purchasing": {
                    "LastCost": "Last Cost",
                    "LastAverageCost": "Last Average Cost",
                    "AverageCost": "Average Cost",
                    "InboundFBACost": "Inbound FBA Cost",
                    "PrepCost": "Prep Cost"
                },
                "PurchaseHistory": {
                    "CaseQty": {
                        "Date": "20.01.2017",
                        "Qty": "Qty",
                        "Av": "Av",
                        "Price": "Price"
                    }
                },
                "Velocity": {
                    "DaysOOS365": "Days OOS 365",
                    "Velocity7Days": "Velocity 7 Days",
                    "Velocity30Days": "Velocity 30 Days",
                    "Velocity90Days": "Velocity 90 Days",
                    "Velocity365Days": "Velocity 365 Days"
                },
                "Profitability": {
                    "Price90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "Profits90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "PricesNow": 26,
                    "ProfitsNow": 27,
                    "TotalNewOffers": "Total New Offers",
                    "FBA": "FBA",
                    "MFN": "MFN",
                    "Rank30Ave": 30,
                    "Category": "Category"
                },
                "Order": {
                    "RelativeSuccessNow": "RelativeSuccess Now",
                    "RelativeSuccess90": "RelativeSuccess 90",
                    "Suggested30": "Suggested 30",
                    "Suggested90": "Suggested 90",
                    "Editable": "Editable",
                    "Total": "Total"
                }
            },
            {
                "ID": 3,
                "Image": "https://images-na.ssl-images-amazon.com/images/I/41kYO1xfvXL._SL75_.jpg",
                "ProductInfo": {
                    "ID": 3,
                    "SKU": "BBB-1040",
                    "ASIN": "B0057T66UW2",
                    "MFNAFN": "MFN/AFN",
                    "ProductName": "Alexander Hamilton Bobblehead",
                    "Condition": "Condition",
                    "FNSKU": "FNSKU"
                },
                "AvailableStock": {
                    "AvailableFBA": "Available FBA",
                    "InboundQty": "Inbound Qty",
                    "ReservedFC": "Reserved FC",
                    "AvailableMFN": "Available MFN",
                    "TotalInventory": "Total Inventory"
                },
                "Purchasing": {
                    "LastCost": "Last Cost",
                    "LastAverageCost": "Last Average Cost",
                    "AverageCost": "Average Cost",
                    "InboundFBACost": "Inbound FBA Cost",
                    "PrepCost": "Prep Cost"
                },
                "PurchaseHistory": {
                    "CaseQty": {
                        "Date": "20.01.2017",
                        "Qty": "Qty",
                        "Av": "Av",
                        "Price": "Price"
                    }
                },
                "Velocity": {
                    "DaysOOS365": "Days OOS 365",
                    "Velocity7Days": "Velocity 7 Days",
                    "Velocity30Days": "Velocity 30 Days",
                    "Velocity90Days": "Velocity 90 Days",
                    "Velocity365Days": "Velocity 365 Days"
                },
                "Profitability": {
                    "Price90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "Profits90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "PricesNow": 26,
                    "ProfitsNow": 27,
                    "TotalNewOffers": "Total New Offers",
                    "FBA": "FBA",
                    "MFN": "MFN",
                    "Rank30Ave": 30,
                    "Category": "Category"
                },
                "Order": {
                    "RelativeSuccessNow": "RelativeSuccess Now",
                    "RelativeSuccess90": "RelativeSuccess 90",
                    "Suggested30": "Suggested 30",
                    "Suggested90": "Suggested 90",
                    "Editable": "Editable",
                    "Total": "Total"
                }
            }, {
                "ID": 4,
                "Image": "https://images-na.ssl-images-amazon.com/images/I/31nK5%2BJNunL._SL75_.jpg",
                "ProductInfo": {
                    "ID": 4,
                    "SKU": "BBB-1040",
                    "ASIN": "B0057T66UW3",
                    "MFNAFN": "MFN/AFN",
                    "ProductName": "Alexander Hamilton Bobblehead",
                    "Condition": "Condition",
                    "FNSKU": "FNSKU"
                },
                "AvailableStock": {
                    "AvailableFBA": "Available FBA",
                    "InboundQty": "Inbound Qty",
                    "ReservedFC": "Reserved FC",
                    "AvailableMFN": "Available MFN",
                    "TotalInventory": "Total Inventory"
                },
                "Purchasing": {
                    "LastCost": "Last Cost",
                    "LastAverageCost": "Last Average Cost",
                    "AverageCost": "Average Cost",
                    "InboundFBACost": "Inbound FBA Cost",
                    "PrepCost": "Prep Cost"
                },
                "PurchaseHistory": {
                    "CaseQty": {
                        "Date": "20.01.2017",
                        "Qty": "Qty",
                        "Av": "Av",
                        "Price": "Price"
                    }
                },
                "Velocity": {
                    "DaysOOS365": "Days OOS 365",
                    "Velocity7Days": "Velocity 7 Days",
                    "Velocity30Days": "Velocity 30 Days",
                    "Velocity90Days": "Velocity 90 Days",
                    "Velocity365Days": "Velocity 365 Days"
                },
                "Profitability": {
                    "Price90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "Profits90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "PricesNow": 26,
                    "ProfitsNow": 27,
                    "TotalNewOffers": "Total New Offers",
                    "FBA": "FBA",
                    "MFN": "MFN",
                    "Rank30Ave": 30,
                    "Category": "Category"
                },
                "Order": {
                    "RelativeSuccessNow": "RelativeSuccess Now",
                    "RelativeSuccess90": "RelativeSuccess 90",
                    "Suggested30": "Suggested 30",
                    "Suggested90": "Suggested 90",
                    "Editable": "Editable",
                    "Total": "Total"
                }
            },
            {
                "ID": 5,
                "Image": "https://images-na.ssl-images-amazon.com/images/I/51brUI2rN-L._SL75_.jpg",
                "ProductInfo": {
                    "ID": 5,
                    "SKU": "BBB-1040",
                    "ASIN": "B0057T66UW4",
                    "MFNAFN": "MFN/AFN",
                    "ProductName": "Alexander Hamilton Bobblehead",
                    "Condition": "Condition",
                    "FNSKU": "FNSKU"
                },
                "AvailableStock": {
                    "AvailableFBA": "Available FBA",
                    "InboundQty": "Inbound Qty",
                    "ReservedFC": "Reserved FC",
                    "AvailableMFN": "Available MFN",
                    "TotalInventory": "Total Inventory"
                },
                "Purchasing": {
                    "LastCost": "Last Cost",
                    "LastAverageCost": "Last Average Cost",
                    "AverageCost": "Average Cost",
                    "InboundFBACost": "Inbound FBA Cost",
                    "PrepCost": "Prep Cost"
                },
                "PurchaseHistory": {
                    "CaseQty": {
                        "Date": "20.01.2017",
                        "Qty": "Qty",
                        "Av": "Av",
                        "Price": "Price"
                    }
                },
                "Velocity": {
                    "DaysOOS365": "Days OOS 365",
                    "Velocity7Days": "Velocity 7 Days",
                    "Velocity30Days": "Velocity 30 Days",
                    "Velocity90Days": "Velocity 90 Days",
                    "Velocity365Days": "Velocity 365 Days"
                },
                "Profitability": {
                    "Price90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "Profits90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "PricesNow": 26,
                    "ProfitsNow": 27,
                    "TotalNewOffers": "Total New Offers",
                    "FBA": "FBA",
                    "MFN": "MFN",
                    "Rank30Ave": 30,
                    "Category": "Category"
                },
                "Order": {
                    "RelativeSuccessNow": "RelativeSuccess Now",
                    "RelativeSuccess90": "RelativeSuccess 90",
                    "Suggested30": "Suggested 30",
                    "Suggested90": "Suggested 90",
                    "Editable": "Editable",
                    "Total": "Total"
                }
            },
            {
                "ID": 6,
                "Image": "https://images-na.ssl-images-amazon.com/images/I/41jOdkaTX-L._SL75_.jpg",
                "ProductInfo": {
                    "ID": 6,
                    "SKU": "BBB-1040",
                    "ASIN": "B0057T66UW5",
                    "MFNAFN": "MFN/AFN",
                    "ProductName": "Alexander Hamilton Bobblehead",
                    "Condition": "Condition",
                    "FNSKU": "FNSKU"
                },
                "AvailableStock": {
                    "AvailableFBA": "Available FBA",
                    "InboundQty": "Inbound Qty",
                    "ReservedFC": "Reserved FC",
                    "AvailableMFN": "Available MFN",
                    "TotalInventory": "Total Inventory"
                },
                "Purchasing": {
                    "LastCost": "Last Cost",
                    "LastAverageCost": "Last Average Cost",
                    "AverageCost": "Average Cost",
                    "InboundFBACost": "Inbound FBA Cost",
                    "PrepCost": "Prep Cost"
                },
                "PurchaseHistory": {
                    "CaseQty": {
                        "Date": "20.01.2017",
                        "Qty": "Qty",
                        "Av": "Av",
                        "Price": "Price"
                    }
                },
                "Velocity": {
                    "DaysOOS365": "Days OOS 365",
                    "Velocity7Days": "Velocity 7 Days",
                    "Velocity30Days": "Velocity 30 Days",
                    "Velocity90Days": "Velocity 90 Days",
                    "Velocity365Days": "Velocity 365 Days"
                },
                "Profitability": {
                    "Price90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "Profits90": {
                        "Low": 20,
                        "High": 21,
                        "Ave": 22
                    },
                    "PricesNow": 26,
                    "ProfitsNow": 27,
                    "TotalNewOffers": "Total New Offers",
                    "FBA": "FBA",
                    "MFN": "MFN",
                    "Rank30Ave": 30,
                    "Category": "Category"
                },
                "Order": {
                    "RelativeSuccessNow": "RelativeSuccess Now",
                    "RelativeSuccess90": "RelativeSuccess 90",
                    "Suggested30": "Suggested 30",
                    "Suggested90": "Suggested 90",
                    "Editable": "Editable",
                    "Total": "Total"
                }
            }
        ]
    };
    $scope.data = northwind.results;
    $scope.comment = '';
$scope.fil = function(i){
    console.log(i)
    $("#grid").igGridFiltering("filter", ([{ fieldName: "ID", expr: $scope.comment, cond: 'equals' }]));

}

    $scope.gridOptions = {
        primaryKey: "CustomerID",
        width: '100%',
        columns: [
            {headerText: "Customer ID", key: "CustomerID"},
            {headerText: "Contact Name", key: "ContactName"},
            {headerText: "City", key: "City"},
            {headerText: "Country", key: "Country"}
        ],
        dataSourceUrl: 'http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$callback=?',
        jsonpRequest: true,
        // dataSourceType:'json',
        responseDataKey: "value",
        autoGenerateColumns: false,
        features: [
            {
                name: "Sorting",
                mode: "multi",
                persist: true
            },
            {
                name: "GroupBy",
                type: "remote",
                persist: true
            },
            {
                name: "Selection",
                mode: 'row',
                multipleSelection: true,
                persist: true
            },
            {
                name: "Paging",
                type: "remote",
                pageSize: 5,
                recordCountKey: "odata.count"
            }
        ]
    };


    $scope.method = 'GET';
    $scope.url = 'data/data.json';

    $scope.url2 = "http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json&$callback=?"

    $http({method: $scope.method, url: $scope.url}).then(function (response) {

        $scope.jsonSourceUrl = response.data;
        console.log($scope.jsonSourceUrl)
        $scope.jsonSourceUrlLen = response.data;
    });


    $(document).delegate("#grid1", "iggridpagingpageindexchanged", function (evt, ui) {


        //  Get the current page index
        console.log(ui.pageIndex + 1);
        $http({method: $scope.method, url: $scope.url}).then(function (response) {

            $scope.jsonSourceUrl = response.data.Message;
            console.log($scope.jsonSourceUrl)

        });
    });


    $("#grid1").on("iggridselectionrowselectionchanging", function (evt, ui) {

        console.log(ui);
    });

    // $("#grid1").on("iggridselectionactiverowchanged", function (evt, ui) {
    //
    //     console.log(ui);
    // });

}

angular
    .module('GridApp')
    .controller('indexCtrl', ['$scope', '$http', '$location', '$timeout', indexCtrl]);
