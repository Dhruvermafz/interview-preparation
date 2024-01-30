"""
What is Bellman-Ford Algorithm?
Bellman-Ford algorithm is used to find the shortest path from the source vertex to every vertex in a weighted graph. Unlike Dijkstra's algorithm, the Bbellman-Ford algorithm can also find the shortest distance to every vertex in the weighted graph even with the negative edges.

The only difference between the Dijkstra algorithm and the bellman ford algorithm is that Dijkstra's algorithm just visits the neighbor vertex in each iteration but the bellman ford algorithm visits each vertex through each edge in every iteration.

Apart from Bellman-Ford and Dijkstra's, Floyd Warshall Algorithm is also the shortest path algorithm. But the Bellman-Ford algorithm is used to compute the shortest path from the single source vertex to all other vertices whereas Floyd-Warshall algorithms compute the shortest path from each node to every other node.
"""

class Graph: 
    def __init__(self, vertices):
        self.M = vertices #Total numner of vertices in the graph
        self.graph = [] #Array of edges

    #Add edges
    def add_edge(self, a, b, c): 
        self.graph.append([a, b, c])

    # Print the solution
    def print_solution(self, distance):
        print("Vertex Distance from Source:")
        for k in range(self.M):
            print("{0}\t\t".format(k, distance[k]))
    def bellman_ford(self, src): 
        distance = [float("Inf")] * self.M
        distance[src] = 0

        for _ in range(self.M - 1): 
            for a, b, c in self.graph:
                if distance[a] != float("Inf") and distance[a] + c < distance[b]: 
                    distance[b] = distance[a] + c

        for a, b, c in self.graph: 
            if distance[a] != float("Inf") and distance[a] + c < distance[b]:

                print("Graph contains negative weight cycle")

                return
        
        self.print_solution(distance)

g = Graph(5)

g.add_edge(0, 1, 2)

g.add_edge(0, 2, 4)

g.add_edge(1, 3, 2)

g.add_edge(2, 4, 3)

g.add_edge(2, 3, 4)

g.add_edge(4, 3, -5)



g.bellman_ford(0)