import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { mockRegistros } from "./src/data/registros";
import { RegistroIndustrial } from "./src/types/RegistroIndustrial";
import { CadastroRegistroScreen } from "./src/screens/CadastroRegistroScreen";
import { DetalheRegistroScreen } from "./src/screens/DetalheRegistroScreen";
import { ListaRegistrosScreen } from "./src/screens/ListaRegistrosScreen";

type Screen = "lista" | "cadastro" | "detalhe";

const STORAGE_KEY = "@sprint2:registros-industriais";

export default function App() {
  const [registros, setRegistros] = useState<RegistroIndustrial[]>(mockRegistros);
  const [registrosCarregados, setRegistrosCarregados] = useState(false);
  const [screen, setScreen] = useState<Screen>("lista");
  const [registroSelecionadoId, setRegistroSelecionadoId] = useState<number | null>(
    null
  );

  useEffect(() => {
    async function carregarRegistros() {
      try {
        const registrosSalvos = await AsyncStorage.getItem(STORAGE_KEY);

        if (registrosSalvos) {
          setRegistros(JSON.parse(registrosSalvos) as RegistroIndustrial[]);
        }
      } catch (error) {
        console.warn("Nao foi possivel carregar os registros.", error);
      } finally {
        setRegistrosCarregados(true);
      }
    }

    carregarRegistros();
  }, []);

  useEffect(() => {
    async function salvarRegistros() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
      } catch (error) {
        console.warn("Nao foi possivel salvar os registros.", error);
      }
    }

    if (registrosCarregados) {
      salvarRegistros();
    }
  }, [registros, registrosCarregados]);

  const registroSelecionado = useMemo(
    () => registros.find((registro) => registro.id === registroSelecionadoId),
    [registros, registroSelecionadoId]
  );

  function handleSalvarRegistro(
    novoRegistro: Omit<RegistroIndustrial, "id" | "data">
  ) {
    const registro: RegistroIndustrial = {
      ...novoRegistro,
      id: Date.now(),
      data: new Date().toISOString()
    };

    setRegistros((registrosAtuais) => [registro, ...registrosAtuais]);
    setRegistroSelecionadoId(registro.id);
    setScreen("detalhe");
  }

  function handleAbrirDetalhe(id: number) {
    setRegistroSelecionadoId(id);
    setScreen("detalhe");
  }

  function handleVoltarLista() {
    setRegistroSelecionadoId(null);
    setScreen("lista");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      {screen === "lista" && (
        <ListaRegistrosScreen
          registros={registros}
          onCadastrar={() => setScreen("cadastro")}
          onSelecionarRegistro={handleAbrirDetalhe}
        />
      )}

      {screen === "cadastro" && (
        <CadastroRegistroScreen
          onCancelar={handleVoltarLista}
          onSalvar={handleSalvarRegistro}
        />
      )}

      {screen === "detalhe" && (
        <DetalheRegistroScreen
          registro={registroSelecionado}
          onVoltar={handleVoltarLista}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc"
  }
});
