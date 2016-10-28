$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "id": "图书搜索",
  "description": "允许客户迅速找到自己喜欢的图书",
  "name": "图书搜索",
  "keyword": "功能",
  "line": 2,
  "comments": [
    {
      "value": "#language:zh-CN",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "图书搜索;根据发布年限找图书",
  "description": "",
  "name": "根据发布年限找图书",
  "keyword": "场景",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "有一本书叫\u0027三国演义\u0027,作者是\u0027罗贯中\u0027,发布于20130102",
  "keyword": "假如",
  "line": 5
});
formatter.step({
  "name": "另外一本书叫\u0027水浒传\u0027,作者是\u0027施耐庵\u0027,发布于20140304",
  "keyword": "同时",
  "line": 6
});
formatter.step({
  "name": "另外一本书叫\u0027西游记\u0027,作者是\u0027吴承恩\u0027,发布于20140506",
  "keyword": "同时",
  "line": 7
});
formatter.step({
  "name": "客户搜索发布于2013年和2014年的图书时",
  "keyword": "当",
  "line": 8
});
formatter.step({
  "name": "能找到2本书",
  "keyword": "那么",
  "line": 9
});
formatter.step({
  "name": "第1本书叫\u0027三国演义\u0027",
  "keyword": "并且",
  "line": 10
});
formatter.step({
  "name": "第2本书叫\u0027水浒传\u0027",
  "keyword": "并且",
  "line": 11
});
formatter.step({
  "name": "第3本书叫\u0027西游记\u0027",
  "keyword": "并且",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "三国演义",
      "offset": 6
    },
    {
      "val": "罗贯中",
      "offset": 16
    },
    {
      "val": "20130102",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 77440832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "水浒传",
      "offset": 7
    },
    {
      "val": "施耐庵",
      "offset": 16
    },
    {
      "val": "20140304",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 169335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "西游记",
      "offset": 7
    },
    {
      "val": "吴承恩",
      "offset": 16
    },
    {
      "val": "20140506",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 163902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2013",
      "offset": 7
    },
    {
      "val": "2014",
      "offset": 13
    }
  ],
  "location": "BookSearchSteps.SetSearchParameters(Date,Date)"
});
formatter.result({
  "duration": 244494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 3
    }
  ],
  "location": "BookSearchSteps.verifyAmountOfBookFound(int)"
});
formatter.result({
  "duration": 4174807,
  "status": "failed",
  "error_message": "java.lang.AssertionError: \nExpected: \u003c2\u003e\n     but: was \u003c3\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat testProject.testProject.BookSearchSteps.verifyAmountOfBookFound(BookSearchSteps.java:37)\r\n\tat ✽.那么能找到2本书(Search.feature:9)\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 1
    },
    {
      "val": "三国演义",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 1
    },
    {
      "val": "水浒传",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 1
    },
    {
      "val": "西游记",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "status": "skipped"
});
});