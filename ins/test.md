---
title: Introduction to ROS
date: '22-7-10'
author: 'scooo'
descript : 'sdtyukfdrte567iygfjhdgrtduitygufdtur'
---



> 　　　　ROS可以形象的描述为一个工厂的运行机制，创建好一个工作空间(workspace)就像一个工厂，工厂里又有好多个生产车间，每个功能包（pkg）看作是一个生产车间，每个生产车间又有好多工人在配合，每个节点（node）看作是一个工人，节点是又是可执行程序的最小单位，工人们之间相互沟通通过消息（mesage）来完成.

### ROS Master 节点管理器

![ROS Master](https://img-blog.csdnimg.cn/20200729170450220.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


- 节点将所有信息发送给ROS Master
- 发送信息的节点称为发布节点(Publisher Nodes)
- 接收信息的节点称为订阅节点(Subscriber Nodes)
- ROS Master拥有在计算机上正在运行的所有发送节点和接收节点的信息.

例如: 节点1发送给某个名为a的数据,而节点2订阅了该消息,那么ROS Masker就向两个节点广播彼此节点信息,以帮助他们建立连接,这样两个节点就能互相通信了.

```
roscore
```

输入这个命令来开启 ROS Master

### ROS Messages 通信架构

ROS节点可以彼此间互相传送不同数据类型,这些数据称为ROS消息(ROS Messages).有了ROS Messages就能在节点之间传递各种类型的数据了.这些消息通过一种类似于数据总线或者路径标识的媒介进行传播,称为ROS话题(Topics).



#### 话题（topic）

　　话题是单向的，一般用于连续发送数据的传感器，建立一次联系后，一个发布者可以向多个订阅者发送信息，同样，一个订阅者也可以订阅多个发布者的消息。对于实时性、周期性的消息，使用topic来传输是最佳的选择。

> topic通信方式是异步的，发送时调用publish()方法，发送完成立即返回，不用等待反馈。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170511683.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


几种topic命令:

| 命令                          | 作用                     |
| :---------------------------- | :----------------------- |
| `rostopic list`               | 列出当前所有的topic      |
| `rostopic info topic_name`    | 显示某个topic的属性信息  |
| `rostopic echo topic_name`    | 显示某个topic的内容      |
| `rostopic pub topic_name ...` | 向某个topic发布内容      |
| `rostopic bw topic_name`      | 查看某个topic的带宽      |
| `rostopic hz topic_name`      | 查看某个topic的频率      |
| `rostopic find topic_type`    | 查找某个类型的topic      |
| `rostopic type topic_name`    | 查看某个topic的类型(msg) |

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170522144.png)




#### 服务（service）

　　服务是同步双向的通信机制，服务器只有在有请求的时候才响应，客户端在发出请求后才接受响应。service包括两部分，一部分是请求方（Clinet），另一部分是应答方/服务提供方（Server）。当服务的请求和响应完成时，两个连接点自动断开。

> Service是同步通信方式，所谓同步就是说，此时Node A发布请求后会在原地等待reply，直到Node B处理完了请求并且完成了reply，Node A才会继续执行。Node A等待过程中，是处于阻塞状态的成通信。这样的通信模型没有频繁的消息传递，没有冲突与高系统资源的占用，只有接受请求才执行服务，简单而且高效。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170536455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


几种service命令:

| rosservice 命令   | 作用                     |
| :---------------- | :----------------------- |
| `rosservice list` | 显示服务列表             |
| `rosservice info` | 打印服务信息             |
| `rosservice type` | 打印服务类型             |
| `rosservice uri`  | 打印服务ROSRPC uri       |
| `rosservice find` | 按服务类型查找服务       |
| `rosservice call` | 使用所提供的args调用服务 |
| `rosservice args` | 打印服务参数             |

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170549247.png)


#### Topic和Service对比

| 名称     | Topic                            | Service                           |
| :------- | :------------------------------- | :-------------------------------- |
| 通信方式 | 异步通信                         | 同步通信                          |
| 实现原理 | TCP/IP                           | TCP/IP                            |
| 通信模型 | Publish-Subscribe                | Request-Reply                     |
| 映射关系 | Publish-Subscribe(多对多)        | Request-Reply（多对一）           |
| 特点     | 接受者收到数据会回调（Callback） | 远程过程调用（RPC）服务器端的服务 |
| 应用场景 | 连续、高频的数据发布             | 偶尔使用的功能/具体的任务         |
| 举例     | 激光雷达、里程计发布数据         | 开关传感器、拍照、逆解计算        |



#### 动作（Action）

　　Actionlib库类似service通信机制，actionlib也是一种请求响应机制的通信方式，actionlib主要弥补了service通信的一个不足，就是当机器人执行一个长时间的任务时，假如利用service通信方式，那么publisher会很长时间接受不到反馈的reply，致使通信受阻。当service通信不能很好的完成任务时候，actionlib则可以比较适合实现长时间的通信过程，actionlib通信过程可以随时被查看过程进度，也可以终止请求，这样的一个特性，使得它在一些特别的机制中拥有很高的效率。

> Action的工作原理是client-server模式，也是一个双向的通信模式。通信双方在ROS Action Protocol下通过消息进行数据的交流通信。client和server为用户提供一个简单的API来请求目标（在客户端）或通过函数调用和回调来执行目标（在服务器端）。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170600800.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)


利用动作库进行请求响应，动作的内容格式应包含三个部分，目标、反馈、结果。

- 目标

  机器人执行一个动作，应该有明确的移动目标信息，包括一些参数的设定，方向、角度、速度等等。从而使机器人完成动作任务。

- 反馈

  在动作进行的过程中，应该有实时的状态信息反馈给服务器的实施者，告诉实施者动作完成的状态，可以使实施者作出准确的判断去修正命令。

- 结果

  当运动完成时，动作服务器把本次运动的结果数据发送给客户端，使客户端得到本次动作的全部信息，例如可能包含机器人的运动时长，最终姿势等等。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200729170611147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0pha2VYWQ==,size_16,color_FFFFFF,t_70)

