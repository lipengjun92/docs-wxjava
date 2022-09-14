---
icon: java
category:
- 教程
tag:
- Lombok
---
# 你一定要试一试Lombok 【翻译】
`Lombok`在`Java`生态圈并不是个新事物，但是我承认我一直打心底低估其实际价值，直到我真正尝试或者说被“说服”尝试了之后了才改变这种想法。以前我并不认为增加一个能够产生任何现代IDE都能轻易产生的代码的类库有什么大的价值。因此我会忽略它，并且一直在写或者生成大量的样板代码。现在我再也不会了。2016年我加入了一个构建在`Spring`基础上的项目，里面早已经在使用`Lombok`。自从那之后我就再也离不开`Lombok`了...为什么呢？

## Lombok到底是何方神圣？
简要来说，`Lombok`是一个类库，它可以被集成到IDE和构建工具中为开发者生成大量的代码。比如说，你再也不需要为POJO类添加诸如`getters`，`setters`，`equals`，`hashCode`和 `toString` 的方法，只需要一个简单的[@Data](https://projectlombok.org/features/Data)注解就可以完成这些事情。

## 构建工具支持
构建工具如`Gradle`或`Maven`，都没有任何问题。`Lombok`跟`Gradle`一起使用没有任何问题。你只需要添加`compileOnly`的`Lombok`依赖，也就是这样：`compileOnly ("org.projectlombok:lombok:${lombokVersion}")`
同样的，我使用`Maven`也不曾遇到过任何问题，尽管我主要使用`Spring`相关技术开发项目，而且近来他们都是可以基于Gradle构建的了。

## IDE支持
我日常工作中使用IntelliJ，它对`Lombok`的支持很好。`Lombok`可以通过第三方插件进行支持：<https://github.com/mplushnikov/lombok-intellij-plugin>。
该插件的配置相当的简单：只需要启用`Lombok`插件以及对相应项目的注解处理即可。 当然，`Lombok`必须要加载到类路径上。当项目配置好了以后，你就可以开始导入`Lombok`的注解，并且开始在你的源代码里立马使用它们。
在IntelliJ里我并没有发现 __代码自动完成__ 会有什么问题，也没有看到任何延迟或者丢失的功能什么的。当我想要查看生成的方法的代码定义时，它给我定位到了`Lombok`的注解处，这样其实也不错，不过如果能够看到生成的代码的话那会更好些。
如果说到不好的方面的话，那就是有时候代码并不会立即可用 - 那么这时候就需要手动的进行编译。对我来说，很少遇到这种情况。
当`Lombok`生效了以后，有些功能不能通过代码编辑器直接使用。比如，当使用`@Builder`注解时，生成了大量的代码，包括`builder`类。要想找到某个`builder`方法的调用位置，你需要在结构（_Structure_）视图里查看。
我们是没办法通过名称导航到对应标识处，但是这看起来并不是什么问题：当使用`Lombok`时，你肯定是知道生成的代码跟某个特定的类有关联。比如，`UserBuilder`是跟`User`类相关的，因此你可以通过进入`User`类来查看其`builder`（如果你真的需要这么做的话）。
总而言之，对日常工作使用来说， 使用IntelliJ并不会产生什么阻碍。

## 代码更容易阅读
使用`Lombok`最主要的一个优势就是使用者需要读的代码变少了。这对于代码审查来说尤其显得有用，当我打开一个类，我可以立即得知它是不是一个纯粹的用`@Data`注解的类或者是一个用`@Value`注解的对象，或者它是否提供了`@Builder`注解，等等。而且尽管`Lombok`会要求在代码里添加更多的注解（`Lombok`注解，`JPA`注解，`Jackson`注解，`Spring`注解等），但这样还是会使得代码更加简洁且易读和易于审阅。

## Lombok 使得部分团队实践标准化
比如，在我开始使用`Lombok`前，每一个项目都会有不同的创建`builder`的办法。有了`Lombok`之后，就更加容易来维护这些实践了（`@Builder` 和 `@Singularity`）。

## Lombok与其他类库配合正常
我在使用`JPA`或者`Jakson`注解与`Lombok`注解混用时并没有出现过什么问题。 不过我听说`MapStruct`和`Lombok`在过去可能会有一些问题，不过据说现在已经修复了：<https://github.com/mapstruct/mapstruct/issues/510>
`Lombok`注解可以很容易被`Spring`组件使用，这样在创建的时候就可以不用写太多代码了。比如，`@AllArgsConstructor`注解可以用来注入`bean`的依赖，因为`Spring`不要求构造器必须使用`@Autowire`注解：
~~~java
@Service
@RequiredArgsContructor
class SomeService {
    private final Dep1 dep1;
    private final Dep2 dep2;
}
~~~
值得注意的是，Spring Boot 的初始化器（`Initializer`） (<http://start.spring.io/>) 在生成的项目文件中提供了`Lombok`依赖（即作为核心依赖之一加入到你的新项目中）。

## 下一个项目就考虑使用Lombok吧
`Lombok`是一个伟大的类库，能够加速开发进程，使得代码更加简洁，易读且易于维护。它已经足够成熟值得一试了。即使你只是决定在简单的用例中使用，它也会给你的项目带来很大的价值的。不管你是否相信我，反正我是在试用了几个星期后才彻底打消怀疑念头的。