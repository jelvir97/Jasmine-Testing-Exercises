describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add new server if input is empty on submitServerInfo()', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should update server table on', function(){
    submitServerInfo();
    updateServerTable();

    let curTD = document.querySelectorAll('#server1 td');

    expect(curTD[0].innerText).toEqual('Alice');
    expect(curTD[1].innerText).toEqual('$0.00');
  })

  afterEach(function() { 
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML= '';
  });
});
