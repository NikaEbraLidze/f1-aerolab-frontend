'use client';
import { useEffect, useRef } from 'react';
import { useSimulationStore } from '@/store/simulationStore';
import { socket } from '@/lib/socket';
import type { SimResult } from '@/types/simulation';
import type { SimParams } from '@/types/simulation';

export function useSimulation() {
  const params = useSimulationStore((s) => s.params);
  const setResult = useSimulationStore((s) => s.setResult);
  const setConnected = useSimulationStore((s) => s.setConnected);
  const setLoading = useSimulationStore((s) => s.setLoading);

  const paramsRef = useRef<SimParams>(params);
  paramsRef.current = params;

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    socket.connect();

    function onConnect() {
      setConnected(true);
      setLoading(true);
      socket.emit('simulate:update', paramsRef.current);
    }

    function onDisconnect() {
      setConnected(false);
    }

    function onResult(data: SimResult) {
      setResult(data);
      setLoading(false);
    }

    function onError() {
      setLoading(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('simulate:result', onResult);
    socket.on('simulate:error', onError);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('simulate:result', onResult);
      socket.off('simulate:error', onError);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (socket.connected) {
        setLoading(true);
        socket.emit('simulate:update', params);
      }
    }, 150);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [params]);
}
